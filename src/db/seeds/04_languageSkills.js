'use strict';

const languageSkills = [
  { formid: 2147483646, language: 'english', languageProficiency: 'basic' },
  { formid: 2147483646, language: 'russian', languageProficiency: 'native' },
];

function createLanguageSkills(knex) {
  return knex('languageSkills')
    .del()
    .then(async () => {
      for (const el of languageSkills) {
        await knex('languageSkills').insert({ ...el });
      }
    })
    .catch((err) => console.log('Seeding createLanguageSkille error:' + err));
}

exports.seed = createLanguageSkills;
