'use strict';

exports.up = function(knex) {
  return knex.schema
  .createTable('messengers', function(table) {
    table.increments('messengerid');
    table.string('messenger').notNullable();
    table.string('info').notNullable();
  })
  .createTable('forms_messengers', function(table) {
    table.integer('messengerid').unsigned();
    table.foreign('messengerid').references('messengerid').inTable('messengers');
    table.integer('formid').unsigned();
    table.foreign('formid').references('formid').inTable('forms');
  })
};
  
exports.down = function(knex) {
  return knex.schema.dropTable('forms_messengers').dropTable('messengers');
};