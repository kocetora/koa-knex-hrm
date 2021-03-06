'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('forms', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.string('middlename');
    table.date('born').notNullable();
    table
      .enu('sex', ['male', 'female'], { useNative: true, enumName: 'sex' })
      .notNullable();
    table.integer('height').notNullable();
    table.string('phoneNumber').notNullable();
    table.string('email').notNullable();
    table.string('prefferedRegion');
    table
      .enu(
        'education',
        ['primary', 'secondary', 'unfinished_higher', 'higher'],
        { useNative: true, enumName: 'education_grade' }
      )
      .notNullable();
    table.integer('expectedSalary').notNullable();
    table.integer('workExperience').notNullable();
    table.integer('unemployedFor').notNullable();
    table.text('note');
    table.boolean('isPublic').notNullable();
    table.date('created_at').defaultTo(knex.fn.now());
    table.date('updated_at').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms').raw('DROP TYPE sex, education_grade');
};
