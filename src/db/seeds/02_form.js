'use strict';

const form = {
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
};
const professions = [{ profession: 'pit_boss' }, { profession: 'trainee' }];
const messengers = [
  { messenger: 'Telegram', info: 'pit_boss' },
  { messenger: 'Viber', info: 'dealer' },
];
const languageSkills = [
  { language: 'english', languageProficiency: 'basic' },
  { language: 'russian', languageProficiency: 'native' },
];

function createForm(knex) {
  return knex('forms')
    .del()
    .then(() =>
      knex('forms')
        .insert({ ...form })
        .returning('id')
    )
    .then(async formid => {
      await createMessengers(knex, ...formid);
      await createProfessions(knex, ...formid);
      await createLanguageSkills(knex, ...formid);
    })
    .catch(err => console.log('Seeding createForm error:' + err));
}

function createMessengers(knex, formid) {
  return knex('messengers')
    .del()
    .then(async () => {
      for (const el of messengers) {
        await knex('messengers').insert({ formid, ...el });
      }
    })
    .catch(err => console.log('Seeding createMessengers error:' + err));
}

function createProfessions(knex, formid) {
  return knex('professions')
    .del()
    .then(async () => {
      for (const el of professions) {
        await knex('professions').insert({ formid, ...el });
      }
    })
    .catch(err => console.log('Seeding createProfessions error:' + err));
}

function createLanguageSkills(knex, formid) {
  return knex('languageSkills')
    .del()
    .then(async () => {
      for (const el of languageSkills) {
        await knex('languageSkills').insert({ formid, ...el });
      }
    })
    .catch(err => console.log('Seeding createLanguageSkille error:' + err));
}

exports.seed = createForm;
