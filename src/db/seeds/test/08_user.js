'use strict';
const argon = require('argon2');

const user = {
  id: 2147483644,
  username: 'login2',
  role: 'user',
};

(async () => {
  user.password_hash = await argon.hash('password');
})();

function createUser(knex) {
  return knex('users')
    .then(() => knex('users').insert({ ...user }))
    .catch(err => console.log('Seeding createUsers error:' + err));
}

exports.seed = createUser;
