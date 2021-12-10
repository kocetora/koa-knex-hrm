'use strict';
const argon = require('argon2');

const user = {
  id: 2147483646,
  username: 'admin-user',
  email: 'admin@mail.com',
};

(async () => {
  user.password = await argon.hash('kyuUJD');
})();

function createUser(knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert({ ...user }))
    .catch(err => console.log('Seeding createUsers error:' + err));
}

exports.seed = createUser;
