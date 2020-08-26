'use strict';

exports.up = function(knex) {
  return knex.schema
    .createTable('messengers', table => {
      table.increments('messengerid');
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
        .references('messengerid')
        .inTable('messengers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('formid')
        .unsigned();
      table
        .foreign('formid')
        .references('formid')
        .inTable('forms')
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
