'use strict';

exports.up = function(knex) {
  return knex.schema
    .createTable('messengers', table => {
      table.increments('id').unsigned().primary();
      table.enu('messenger', [
        'Telegram',
        'Viber',
        'WhatsApp'
      ],
      { useNative: true, enumName: 'messenger' }).notNullable();
      table.string('info').notNullable();
    })
    .createTable('forms_messengers', table => {
      table
        .integer('messengerid')
        .unsigned();
      table
        .foreign('messengerid')
        .references('messengers.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('formid')
        .unsigned();
      table
        .foreign('formid')
        .references('forms.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('forms_messengers')
    .dropTable('messengers')
    .raw('DROP TYPE messenger');
};
