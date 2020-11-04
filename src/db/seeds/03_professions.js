'use strict';

const professions = [
  { formid: 2147483646, profession: 'pit_boss' },
  { formid: 2147483646, profession: 'trainee' },
];

function createProfessions(knex) {
  return knex('professions')
    .del()
    .then(async () => {
      for (const el of professions) {
        await knex('professions').insert({ ...el });
      }
    })
    .catch((err) => console.log('Seeding createProfessions error:' + err));
}

exports.seed = createProfessions;
