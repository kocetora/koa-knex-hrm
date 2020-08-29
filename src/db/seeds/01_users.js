'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => knex('users').insert([{
      username: 'rowValue1',
      password: 'akxjn'
    },
    {
      username: 'rowValue2',
      password: 'akxjn'
    },
    {
      username: 'rowValue3',
      password: 'akxjn'
    }
    ]));
};
