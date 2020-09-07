'use strict';
const knex = require('../../db/knex');

const addComment = comment => knex('comments')
  .insert({ ...comment });

module.exports = {
  addComment
};
