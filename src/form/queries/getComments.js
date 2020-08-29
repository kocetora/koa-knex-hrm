'use strict';
const knex = require('../../db/knex');

const getComments = () => knex('comments')
  .select('*');

module.exports = {
  getComments
};
