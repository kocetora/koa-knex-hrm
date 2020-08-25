'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
      table.increments('userid');
      table.string('username').notNullable();
      table.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
