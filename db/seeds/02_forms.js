'use strict';

exports.seed = function(knex) {
  return knex('forms').del()
    .then(() => knex('forms').insert([
      {
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
          { messenger: 'Telegram', info: 'blablabla1' },
          { messenger: 'Viber', info: 'blablabla2' },
          { messenger: 'WhatsApp', info: 'blablabla3' },
          { messenger: 'Telegram', info: 'blablabla4' },
          { messenger: 'WhatsApp', info: 'blablabla5' }
        ]))
    ).then(
      knex('languageSkills').del()
        .then(() => knex('languageSkills').insert([
          { language: 'english', languageProficiency: 'basic' },
          { language: 'russian', languageProficiency: 'fluent' },
          { language: 'english', languageProficiency: 'native' },
        ]))
    );
};



