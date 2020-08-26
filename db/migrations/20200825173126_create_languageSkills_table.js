'use strict';

exports.up = function(knex) {
  return knex.schema
    .createTable('languageSkills', table => {
      table.increments('languageid');
      table.enu('language', [
        'english',
        'russian'],
      { useNative: true, enumName: 'language' }).notNullable();
      table.enu('languageProficiency', [
        'native',
        'fluent',
        'intermediate',
        'basic'],
      { useNative: true, enumName: 'language_proficiency' }).notNullable();
    })
    .createTable('forms_languageSkills', table => {
      table
        .integer('languageid')
        .unsigned();
      table
        .foreign('languageid')
        .references('languageid')
        .inTable('languageSkills')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('formid')
        .unsigned();
      table.foreign('formid')
        .references('formid')
        .inTable('forms')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('forms_languageSkills')
    .dropTable('languageSkills')
    .raw('DROP TYPE language, language_proficiency');
};
