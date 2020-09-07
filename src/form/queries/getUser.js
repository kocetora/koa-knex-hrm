'use strict';
const knex = require('../../db/knex');

const getUser = id => knex('users')
  .where({ id })
  .select('id', 'username');

module.exports = {
  getUser
};
