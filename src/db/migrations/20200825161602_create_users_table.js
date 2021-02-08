'use strict';

exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('username').unique().notNullable();
    table.string('password_hash').notNullable();
    table
      .enu('role', ['user', 'admin'], { useNative: true, enumName: 'role' })
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users').raw('DROP TYPE role');
};
