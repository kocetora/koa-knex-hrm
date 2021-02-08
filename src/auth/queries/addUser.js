'use strict';
const knex = require('../../db/knex');

const addUser = (user) => knex('users').insert({ ...user });

module.exports = {
  addUser,
};
