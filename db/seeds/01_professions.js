'use strict';

exports.seed = function(knex) {
  return knex('professions').del()
    .then(function () {
      return knex('professions').insert([
        {professionid: 1, profession: 'trainee'},
        {professionid: 2, profession: 'dealer'},
        {professionid: 3, profession: 'inspector'},
        {professionid: 4, profession: 'manager'},
        {professionid: 5, profession: 'pit_boss'},
        {professionid: 6, profession: 'waiter'},
        {professionid: 7, profession: 'barman'}
      ]);
    });
};
