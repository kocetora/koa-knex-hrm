'use strict';
const knex = require('../../db/knex');

const clearTestUsers = (word) => 
    knex('users')
    .where('username', 'like', `sk$**test_%`)
    .del();

module.exports = {
    clearTestUsers,
};
