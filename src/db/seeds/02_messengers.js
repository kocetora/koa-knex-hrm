'use strict';

const messengers = [
  { formid: 2147483646, messenger: 'Telegram', info: 'pit_boss' },
  { formid: 2147483646, messenger: 'Viber', info: 'dealer' },
];

function createMessengers(knex) {
  return knex('messengers')
    .del()
    .then(async () => {
      for (const el of messengers) {
        await knex('messengers').insert({ ...el });
      }
    })
    .catch(err => console.log('Seeding createMessengers error:' + err));
}

exports.seed = createMessengers;
