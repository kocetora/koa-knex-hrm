'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('comments', table => {
    table.increments('id').unsigned().primary();
    table.string('comment').notNullable();
    table.integer('userid').unsigned().references('users.id');
    table.integer('formid').unsigned();
    table
      .foreign('formid')
      .references('forms.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
