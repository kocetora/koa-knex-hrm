'use strict';

exports.up = function (knex) {
  return knex.schema.createTable('professions', (table) => {
    table.increments('id').unsigned().primary();
    table
      .enu(
        'profession',
        [
          'trainee',
          'dealer',
          'inspector',
          'manager',
          'pit_boss',
          'waiter',
          'barman',
        ],
        { useNative: true, enumName: 'profession' }
      )
      .notNullable();
    table.integer('formid').unsigned();
    table
      .foreign('formid')
      .references('forms.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professions').raw('DROP TYPE profession');
};
