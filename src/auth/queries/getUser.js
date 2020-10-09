'use strict';
const knex = require('../../db/knex');

const getUser = (username) => knex('users').where({ username }).select();

module.exports = {
  getUser,
};
