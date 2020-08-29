'use strict';

exports.up = function(knex) {
  return knex.schema
    .createTable('professions', table => {
      table.increments('id').unsigned().primary();
      table.string('profession').notNullable();
    })
    .createTable('forms_professions', table => {
      table
        .integer('professionid')
        .unsigned();
      table
        .foreign('professionid')
        .references('professions.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('formid')
        .unsigned();
      table
        .foreign('formid')
        .references('forms.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms_professions').dropTable('professions');
};
