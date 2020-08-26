'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      {
        userid: 1,
        username: 'rowValue1',
        password: 'akxjn'
      },
      {
        userid: 2,
        username: 'rowValue2',
        password: 'akxjn'
      },
      {
        userid: 3,
        username: 'rowValue3',
        password: 'akxjn'
      }
    ]));
};
