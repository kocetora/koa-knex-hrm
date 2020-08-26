'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('commentid');
    table.string('comment').notNullable();
    table.integer('userid').references('userid').inTable('users');
    table.integer('formid').unsigned();
    table.foreign('formid').references('formid').inTable('forms').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
