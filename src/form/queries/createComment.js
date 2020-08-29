'use strict';
const knex = require('../../db/knex');

const createComment = comment => knex('comments')
  .insert({ ...comment });

module.exports = {
  createComment
};
