'use strict';
const argon = require('argon2');

const user = {
  id: 2147483646,
  address: 'admin-user',
  email: 'admin@mail.com',
  password: 'dslkvn'
};

(async () => {
  user.password = await argon.hash(user.password);
  user.email = await argon.hash(user.email);
  user.email = await argon.hash(user.address);
})();

function createUser(knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert({ ...user }))
    .catch(err => console.log('Seeding createUsers error:' + err));
}

exports.seed = createUser;
