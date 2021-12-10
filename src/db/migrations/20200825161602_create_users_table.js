'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').unsigned().primary();
    table.string('address').unique().notNullable();
    table.string('password').notNullable();
    table.string('email').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
