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

  if (
    expectedSalary &&
    !isInt(expectedSalary.toString(), {
      min: 0,
      max: 2147483647,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect expectedSalary. Should be bigger than ' +
        '0 and less then 2147483647'
    );
  }

  if (submitted && !isDate(submitted)) {
    return ctx.throw(400, 'Incorrect submitted date. Should be YYYY-MM-DD');
  }

  if (
    phoneNumber &&
    !isLength(phoneNumber, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect phoneNumber. Should be shorter then 128');
  }

  if (
    workExperience &&
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

  if (height && height[0]) {
    if (
      Object.getOwnPropertyNames(height[0])[0] !== 'from' ||
      Object.getOwnPropertyNames(height[0])[1] !== 'to'
    ) {
      return ctx.throw(
        400,
        'Undefined from or to field. Should be bigger than 0' +
          ' and less then 2147483647'
      );
    }
    for (const key in height[0]) {
      if (height[0][key]) {
        const el = height[0][key];
        if (
          !el ||
          !isInt(el.toString(), {
            min: 0,
            max: 2147483647,
          })
        ) {
          return ctx.throw(
            400,
            'Incorrect height. Should be bigger than 0 and less then 2147483647'
          );
        }
      }
    }
  }

  if (age && age[0]) {
    if (
      Object.getOwnPropertyNames(age[0])[0] !== 'from' ||
      Object.getOwnPropertyNames(age[0])[1] !== 'to'
    ) {
      return ctx.throw(
        400,
        'Undefined from or to field. Should be bigger than 0' +
          ' and less then 2147483647'
      );
    }
    for (const key in age[0]) {
      if (age[0][key]) {
        const el = age[0][key];
        if (
          !el ||
          !isInt(el.toString(), {
            min: 0,
            max: 2147483647,
          })
        ) {
          return ctx.throw(
            400,
            'Incorrect age. Should be bigger than 0 and less then 2147483647'
          );
        }
      }
    }
  }

  if (sex && !isIn(sex, ['male', 'female'])) {
    return ctx.throw(400, 'Incorrect sex. May be male or female only');
  }

  if (
    education &&
    !isIn(education, ['primary', 'secondary', 'unfinished_higher', 'higher'])
  ) {
    return ctx.throw(
      400,
      'Incorrect education. May be primary, secondary, ' +
        'unfinished_higher or higher only'
    );
  }

  if (professions && professions[0]) {
    professions.forEach(obj => {
      if (Object.getOwnPropertyNames(obj)[0] !== 'profession') {
        return ctx.throw(
          400,
          'Undefined profession. May be trainee, dealer, inspector, ' +
            'manager, pit_boss, waiter or barman only'
        );
      }
      if (
        !isIn(obj.profession, [
          'trainee',
          'dealer',
          'inspector',
          'manager',
          'pit_boss',
          'waiter',
          'barman',
        ])
      ) {
        return ctx.throw(
          400,
          'Incorrect profession. May be trainee, dealer, inspector, ' +
            'manager, pit_boss, waiter or barman only'
        );
      }
    });
  }

  if (messengers && messengers[0]) {
    messengers.forEach(obj => {
      if (Object.getOwnPropertyNames(obj)[0] !== 'messenger') {
        return ctx.throw(
          400,
          'Undefined messenger. May be Telegram, Viber or WhatsApp only'
        );
      }
      if (!isIn(obj.messenger, ['Telegram', 'Viber', 'WhatsApp'])) {
        return ctx.throw(
          400,
          'Incorrect messenger. May be Telegram, Viber or WhatsApp only'
        );
      }
    });
  }

  if (languageSkills && languageSkills[0]) {
    languageSkills.forEach(obj => {
      if (
        Object.getOwnPropertyNames(obj)[0] !== 'language' &&
        Object.getOwnPropertyNames(obj)[1] !== 'language'
      ) {
        return ctx.throw(
          400,
          'Undefined language. May be russian or english only'
        );
      }
      if (
        Object.getOwnPropertyNames(obj)[0] !== 'languageProficiency' &&
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
      if (
        !isIn(obj.languageProficiency, [
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
    });
  }

  return next();
};

module.exports = {
  filter,
};
