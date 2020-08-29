const knex = require('../../db/knex');

const createUser = (user) => knex('users')
  .insert({...user });

module.exports = {
  createUser
};