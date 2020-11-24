'use strict';

const { isLength, isInt, isDate, isIn } = require('validator');

const filter = async (ctx, next) => {
  const {
    sex,
    age,
    height,
    phoneNumber,
    education,
    expectedSalary,
    workExperience,
    messengers,
    professions,
    languageSkills,
    submitted,
  } = ctx.request.body;

  if (expectedSalary &&
      !isInt(expectedSalary.toString(), {
        min: 1,
        max: 100000,
      })
    ) {
    return ctx.throw(
      400,
      'Incorrect expectedSalary. Should be bigger than ' +
        '1 and less then 100000'
    );
  }

  if (submitted && !isDate(submitted)) {
    return ctx.throw(400, 'Incorrect submitted date. Should be YYYY-MM-DD');
  }

  if (phoneNumber &&
      !isLength(phoneNumber, {
        min: 5,
        max: 20,
      })
    ) {
    return ctx.throw(
      400,
      'Incorrect phoneNumber. Should be longer than 5 and shorter then 20'
    );
  }

  if (workExperience &&
      !isInt(workExperience.toString(), {
        min: 0,
        max: 1211,
      })
    ) {
    return ctx.throw(
      400,
      'Incorrect workExperience. Should be bigger than ' +
        '0 and less then 1211'
    );
  }

  if(height){
    height.forEach((obj) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const el = obj[key];
          if (!el ||
              !isInt(el.toString(), {
                min: 30,
                max: 300,
              })
          ) {
            return ctx.throw(
              400,
              'Incorrect height. Should be bigger than 30 and less then 300'
            );
          }
        }
      }
    })
  }

  if (age) {
    age.forEach((obj) => {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const el = obj[key];
          if (!el ||
              !isInt(el.toString(), {
                min: 1,
                max: 150,
              })
          ) {
            return ctx.throw(
              400,
              'Incorrect age. Should be bigger than 1 and less then 150'
            );
          }
        }
      }
    }) 
  }

  if (sex && 
      !isIn(sex, ['male', 'female'])
    ) {
    return ctx.throw(400, 'Incorrect sex. May be male or female only');
  }

  if (education &&
      !isIn(education, ['primary', 'secondary', 'unfinished_higher', 'higher'])
    ) {
      return ctx.throw(
        400,
        'Incorrect education. May be primary, secondary, ' +
          'unfinished_higher or higher only'
    );
  }
  
  if (professions) {
    professions.forEach((obj) => {
      if (Object.getOwnPropertyNames(obj)[0] !== 'profession') {
        return ctx.throw(
          400,
          'Undefined profession. May be trainee, dealer, inspector, ' +
            'manager, pit_boss, waiter or barman only'
        );
      }
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const el = obj[key];
          if (!isIn(el, [
                'trainee',
                'dealer',
                'inspector',
                'manager',
                'pit_boss',
                'waiter',
                'barman',
              ])
          ) {
            console.log('cn ' +  el)
            return ctx.throw(
              400,
              'Incorrect profession. May be trainee, dealer, inspector, ' +
                'manager, pit_boss, waiter or barman only'
            );
          } 
        }
      }
    })
  }

    if (messengers) {
    messengers.forEach((obj) => {
      if (Object.getOwnPropertyNames(obj)[0] !== 'messenger') {
        return ctx.throw(
          400,
          'Undefined messenger. May be Telegram, Viber or WhatsApp only'
        );
      }
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const el = obj[key];
          if (!isIn(el, ['Telegram', 'Viber', 'WhatsApp'])) {
            return ctx.throw(
              400,
              'Incorrect messenger. May be Telegram, Viber or WhatsApp only'
            );
          } 
        } 
      }
    })
  }

  if (languageSkills) {
    languageSkills.forEach((obj) => {
      if (Object.getOwnPropertyNames(obj)[0] !== 'language' &&
          Object.getOwnPropertyNames(obj)[1] !== 'language'
          ) {
          return ctx.throw(
            400,
            'Undefined language. May be russian or english only'
        );
      }
      if (Object.getOwnPropertyNames(obj)[0] !== 'languageProficiency' &&
          Object.getOwnPropertyNames(obj)[1] !== 'languageProficiency'
          ) {
          return ctx.throw(
            400,
            'Undefined languageProficiency. May be russian or ' +
            'native, fluent, intermediate or basic only'
        );
      }
      if (!isIn(obj.language, ['russian', 'english'])) {
        return ctx.throw(
          400,
          'Incorrect language. May be russian or english only'
        );
      }
      if (!isIn(obj.languageProficiency, [
          'native',
          'fluent',
          'intermediate',
          'basic',
        ])
      ) {
        return ctx.throw(
          400,
          'Incorrect languageProficiency. May be russian or ' +
            'native, fluent, intermediate or basic only'
        );
      }
    })
  }
  
  return next();
};

module.exports = {
  filter,
};
