'use strict';
const argon = require('argon2');

const user = {
  id: 2147483646,
  username: 'admin-user',
  role: 'admin',
};

(async () => {
  user.password_hash = await argon.hash('kyuUJD');
})();

function createUser(knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert({ ...user }))
    .catch(err => console.log('Seeding createUsers error:' + err));
}

exports.seed = createUser;
