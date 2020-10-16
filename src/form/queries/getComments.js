'use strict';
const knex = require('../../db/knex');

const getComments = (formid) => knex('comments').where({ formid }).select();

module.exports = {
  getComments,
};
