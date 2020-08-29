'use strict';
const knex = require('../../db/knex');

const getFormById = () => knex('forms')
  .where({ id })
  .select('*');

module.exports = {
  getFormById
};