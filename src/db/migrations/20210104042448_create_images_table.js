'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('images', table => {
    table.increments('id').unsigned().primary();
    table.text('avatar');
    table.boolean('primary');
    table.integer('formid').unsigned();
    table
      .foreign('formid')
      .references('forms.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('images');
};
