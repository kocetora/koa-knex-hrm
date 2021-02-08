'use strict';

const {
  isLength,
  isEmail,
  isInt,
  isDate,
  isIn,
  isBoolean,
} = require('validator');

const form = (ctx, next) => {
  const {
    name,
    surname,
    middlename,
    born,
    sex,
    height,
    phoneNumber,
    email,
    prefferedRegion,
    education,
    expectedSalary,
    workExperience,
    unemployedFor,
    note,
    messengers,
    professions,
    languageSkills,
    isPublic,
  } = ctx.request.body;
  if (
    !name ||
    !isLength(name, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect name. Should be shorter then 128');
  }
  if (
    !surname ||
    !isLength(surname, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect surname. Should be shorter then 128');
  }
  if (
    !phoneNumber ||
    !isLength(phoneNumber, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect phoneNumber. Should be shorter then 128');
  }
  if (!born || !isDate(born)) {
    return ctx.throw(400, 'Incorrect born date. Should be YYYY-MM-DD');
  }
  if (
    !email ||
    !isEmail(email, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect email');
  }
  if (
    !education ||
    !isIn(education, ['primary', 'secondary', 'unfinished_higher', 'higher'])
  ) {
    return ctx.throw(
      400,
      'Incorrect education. May be primary, secondary,' +
        ' unfinished_higher or higher only'
    );
  }
  if (!sex || !isIn(sex, ['male', 'female'])) {
    return ctx.throw(400, 'Incorrect sex. May be male or female only');
  }
  if (prefferedRegion === undefined) {
    return next();
  } else if (
    prefferedRegion !== undefined &&
    !isLength(prefferedRegion, {
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect prefferedRegion. Should be shorter then 128'
    );
  }
  if (middlename === undefined) {
    return next();
  } else if (
    middlename !== undefined &&
    !isLength(middlename, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect middlename. Should be shorter then 128');
  }
  if (note === undefined) {
    return next();
  } else if (
    note !== undefined &&
    !isLength(note, {
      max: 255,
    })
  ) {
    return ctx.throw(400, 'Incorrect note. Should be shorter then 255');
  }
  if (
    !height ||
    !isInt(height.toString(), {
      min: 0,
      max: 2147483647,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect height. Should be bigger then 0 and less then 2147483647'
    );
  }
  if (
    !expectedSalary ||
    !isInt(expectedSalary.toString(), {
      min: 0,
      max: 2147483647,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect expectedSalary. Should be bigger than' +
        ' 0 and less then 2147483647'
    );
  }
  if (
    !workExperience ||
    !isInt(workExperience.toString(), {
      min: 0,
      max: 1211,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect workExperience. Should be bigger than' +
        ' 0 and less then 1211'
    );
  }
  if (
    !unemployedFor ||
    !isInt(unemployedFor.toString(), {
      min: 0,
      max: 1211,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect unemployedFor. Should be bigger than 0' +
        ' and less then 1211'
    );
  }
  if (isPublic !== undefined && !isBoolean(isPublic.toString())) {
    return ctx.throw(400, 'Incorrect isPublic. Should be boolean');
  }
  if (
    prefferedRegion !== undefined &&
    !isLength(prefferedRegion, {
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect prefferedRegion. Should be shorter then 128'
    );
  }
  languageSkills.forEach(el => {
    if (!el.language || !isIn(el.language, ['russian', 'english'])) {
      return ctx.throw(
        400,
        'Incorrect language. May be russian or english only'
      );
    }
    if (
      !el.languageProficiency ||
      !isIn(el.languageProficiency, [
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
  professions.forEach(el => {
    if (
      !el.profession ||
      !isIn(el.profession, [
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
        'Incorrect profession. May be trainee, dealer, inspector,' +
          ' manager, pit_boss, waiter or barman only'
      );
    }
  });
  messengers.forEach(el => {
    if (
      !el.messenger ||
      !isIn(el.messenger, ['Telegram', 'Viber', 'WhatsApp'])
    ) {
      return ctx.throw(
        400,
        'Incorrect messenger. May be Telegram, Viber or WhatsApp only'
      );
    }
    if (
      !el.info ||
      !isLength(el.info, {
        max: 128,
      })
    ) {
      return ctx.throw(400, 'Incorrect info. Should be shorter then 128');
    }
  });

  return next();
};

module.exports = {
  form,
};
