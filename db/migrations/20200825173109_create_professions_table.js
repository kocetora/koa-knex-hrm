'use strict';

exports.up = function(knex) {
  return knex.schema
  .createTable('professions', function(table) {
    table.increments('professionid');
    table.string('profession').notNullable();
  })
  .createTable('forms_professions', function(table) {
    table.integer('professionid').unsigned();
    table.foreign('professionid').references('professionid').inTable('professions').onDelete('CASCADE').onUpdate('CASCADE');
    table.integer('formid').unsigned();
    table.foreign('formid').references('formid').inTable('forms').onDelete('CASCADE').onUpdate('CASCADE');
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable('forms_professions').dropTable('professions');
};