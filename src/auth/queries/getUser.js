'use strict';
const knex = require('../../db/knex');

const getUser = id => knex('users').where({ id }).select();

module.exports = {
  getUser,
};
