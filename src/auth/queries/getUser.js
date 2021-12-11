'use strict';
const knex = require('../../db/knex');

const getUser = (email) => knex('users').where({ email }).select();

module.exports = {
  getUser
};
