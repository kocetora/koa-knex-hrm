'use strict';

const comments = [
  {
    formid: 2147483646,
    userid: 2147483646,
    comment: 'password',
  },
  {
    formid: 2147483646,
    userid: 2147483646,
    comment: 'pasdkcd',
  },
];

function createComments(knex) {
  return knex('comments')
    .del()
    .then(async () => {
      for (const el of comments) {
        await knex('comments').insert({ ...el });
      }
    })
    .catch(err => console.log('Seeding createComments error:' + err));
}

exports.seed = createComments;
