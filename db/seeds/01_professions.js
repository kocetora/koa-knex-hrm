'use strict';

exports.seed = function(knex) {
  return knex('professions').del()
    .then(() => knex('professions').insert([
      { profession: 'trainee' },
      { profession: 'dealer' },
      { profession: 'inspector' },
      { profession: 'manager' },
      { profession: 'pit_boss' },
      { profession: 'waiter' },
      { profession: 'barman' }
    ]));
};
