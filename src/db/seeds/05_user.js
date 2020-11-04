'use strict';

const user = {
  id: 2147483646,
  username: 'login',
  password: 'password',
};

function createUser(knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert({ ...user }))
    .catch(err => console.log('Seeding createUsers error:' + err));
}

exports.seed = createUser;
