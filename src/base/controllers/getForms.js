'use strict';
const knex = require('../../db/knex');

const getForms = () => knex('forms')
  .select('*');

module.exports = {
  getForms
};
