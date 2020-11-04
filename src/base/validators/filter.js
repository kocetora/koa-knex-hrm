// 'use strict';

// const { isLength, isInt, isDate, isIn } = require('validator');

// const filter = async (ctx, next) => {
//   const {
//     sex,
//     age,
//     height,
//     phoneNumber,
//     education,
//     expectedSalary,
//     workExperience,
//     messengers,
//     professions,
//     languageSkills,
//     submitted,
//   } = ctx.request.body;

//   expectedSalary.forEach((el) => {
//     if (
//       !el ||
//       !isInt(el.toString(), {
//         min: 1,
//         max: 100000,
//       })
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect expectedSalary. Should be bigger' +
//           ' than 1 and less then 100000'
//       );
//     }
//   });

//   if (!submitted || !isDate(submitted)) {
//     return ctx.throw(400, 'Incorrect submitted date. Should be YYYY-MM-DD');
//   }

//   if (
//     !phoneNumber ||
//     !isLength(phoneNumber, {
//       min: 5,
//       max: 20,
//     })
//   ) {
//     return ctx.throw(
//       400,
//       'Incorrect phoneNumber. Should be longer than 5 and shorter then 20'
//     );
//   }

//   workExperience.forEach((el) => {
//     if (
//       !el ||
//       !isInt(el.toString(), {
//         min: 0,
//         max: 1211,
//       })
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect workExperience. Should be bigger than ' +
//           '0 and less then 1211'
//       );
//     }
//   });

//   height.forEach((el) => {
//     if (
//       !el ||
//       !isInt(el.toString(), {
//         min: 30,
//         max: 300,
//       })
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect height. Should be bigger than 30 and less then 300'
//       );
//     }
//   });

//   age.forEach((el) => {
//     if (
//       !el ||
//       !isInt(el.toString(), {
//         min: 1,
//         max: 150,
//       })
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect age. Should be bigger than 1 and less then 150'
//       );
//     }
//   });

//   if (!sex || !isIn(sex, ['male', 'female'])) {
//     return ctx.throw(400, 'Incorrect sex. May be male or female only');
//   }

//   if (
//     !education ||
//     !isIn(education, ['primary', 'secondary', 'unfinished_higher', 'higher'])
//   ) {
//     return ctx.throw(
//       400,
//       'Incorrect education. May be primary, secondary, ' +
//         'unfinished_higher or higher only'
//     );
//   }

//   professions.forEach((el) => {
//     if (
//       !el.profession ||
//       !isIn(el.profession, [
//         'trainee',
//         'dealer',
//         'inspector',
//         'manager',
//         'pit_boss',
//         'waiter',
//         'barman',
//       ])
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect profession. May be trainee, dealer, inspector,' +
//           'manager, pit_boss, waiter or barman only'
//       );
//     }
//   });

//   languageSkills.forEach((el) => {
//     if (!el.language || !isIn(el.language, ['russian', 'english'])) {
//       return ctx.throw(
//         400,
//         'Incorrect language. May be russian or english only'
//       );
//     }
//     if (
//       !el.languageProficiency ||
//       !isIn(el.languageProficiency, [
//         'native',
//         'fluent',
//         'intermediate',
//         'basic',
//       ])
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect languageProficiency. May be russian or ' +
//           'native, fluent, intermediate or basic only'
//       );
//     }
//   });

//   messengers.forEach((el) => {
//     if (
//       !el.messenger ||
//       !isIn(el.messenger, ['Telegram', 'Viber', 'WhatsApp'])
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect messenger. May be russian or english only'
//       );
//     }
//     if (
//       !el.info ||
//       !isLength(el.info, {
//         min: 1,
//         max: 128,
//       })
//     ) {
//       return ctx.throw(
//         400,
//         'Incorrect info. Should be longer than 1 and shorter then 128'
//       );
//     }
//   });

//   return next();
// };

// module.exports = {
//   filter,
// };
