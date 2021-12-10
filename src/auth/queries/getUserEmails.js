'use strict';
const knex = require('../../db/knex');

const getUserEmails = () => knex('users').select('email');

module.exports = {
  getUserEmails,
};
