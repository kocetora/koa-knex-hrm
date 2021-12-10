'use strict';
const knex = require('../../db/knex');

const getUserEmails = () => knex('users').select('id', 'email');

module.exports = {
  getUserEmails,
};
