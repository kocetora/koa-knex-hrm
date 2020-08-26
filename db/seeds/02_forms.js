'use strict';

exports.seed = function(knex) {
  return knex('forms').del()
    .then(() => knex('forms').insert([
      {
        formid: 1,
        name: 'mvlsd',
        surname: 'ldslv',
        sex: 'female',
        born: '2001-05-05',
        height: 30,
        phoneNumber: '23438',
        email: 'kldslv@nvd.com',
        education: 'primary',
        expectedSalary: 688,
        prefferedRegion: 'mldslv',
        workExperience: 27,
        unemployedFor: 12,
        note: 'sdv',
      },
      {
        formid: 2,
        name: 'mvlsd',
        surname: 'ldslv',
        sex: 'female',
        born: '2001-05-05',
        height: 30,
        phoneNumber: '23438',
        email: 'kldslv@nvd.com',
        education: 'primary',
        expectedSalary: 688,
        prefferedRegion: 'mldslv',
        workExperience: 27,
        unemployedFor: 12,
        note: 'sdv',
      },
      {
        formid: 3,
        name: 'mvlsd',
        surname: 'ldslv',
        sex: 'female',
        born: '2001-05-05',
        height: 30,
        phoneNumber: '23438',
        email: 'kldslv@nvd.com',
        education: 'primary',
        expectedSalary: 688,
        prefferedRegion: 'mldslv',
        workExperience: 27,
        unemployedFor: 12,
        note: 'sdv',
      }
    ])).then(
      knex('messengers').del()
        .then(() => knex('messengers').insert([
          { messengerid: 1, messenger: 'Telegram', info: 'blablabla1' },
          { messengerid: 2, messenger: 'Viber', info: 'blablabla2' },
          { messengerid: 3, messenger: 'WhatsApp', info: 'blablabla3' },
          { messengerid: 4, messenger: 'Telegram', info: 'blablabla4' },
          { messengerid: 5, messenger: 'WhatsApp', info: 'blablabla5' }
        ]))
    ).then(
      knex('forms_messengers').del()
        .then(() => knex('forms_messengers').insert([
          { messengerid: 1, formid: 1 },
          { messengerid: 2, formid: 2 },
          { messengerid: 3, formid: 2 },
          { messengerid: 4, formid: 2 },
          { messengerid: 5, formid: 3 }
        ]))
    ).then(
      knex('languageSkills').del()
        .then(() => knex('languageSkills').insert([
          { languageid: 1, language: 'english', languageProficiency: 'basic' },
          { languageid: 2, language: 'russian', languageProficiency: 'fluent' },
          { languageid: 3, language: 'english', languageProficiency: 'native' },
        ]))
    ).then(
      knex('forms_languageSkills').del()
        .then(() => knex('forms_languageSkills').insert([
          { languageid: 1, formid: 1 },
          { languageid: 2, formid: 1 },
          { languageid: 3, formid: 2 },
        ]))
    ).then(
      knex('forms_professions').del()
        .then(() => knex('forms_professions').insert([
          { professionid: 3, formid: 1 },
          { professionid: 7, formid: 2 },
          { professionid: 5, formid: 2 },
        ]))
    );
};



