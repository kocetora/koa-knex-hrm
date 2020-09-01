'use strict';
const knex = require('../../db/knex');

const deleteForm = id => knex('forms')
  .where({ id })
  .del();

module.exports = {
  deleteForm
};