exports.up = function(knex) {
  return knex.schema.createTable('forms', function(table) {
    table.increments('formid');
    table.string('name').notNullable();
    table.string('surname').notNullable();
    table.date('born').notNullable();
    table.enu('sex', ['male', 'female'], { useNative: true, enumName: 'sex' }).notNullable();
    table.integer('height').notNullable();
    table.string('phoneNumber').notNullable();
    table.string('email').notNullable();
    table.string('prefferedRegion');
    table.enu('education', [
      'primary',
      'secondary',
      'unfinished_higher',
      'higher'], 
      { useNative: true, enumName: 'education_grade' }).notNullable();
    table.integer('expectedSalary').notNullable();
    table.integer('workExperience').notNullable();
    table.integer('unemployedFor').notNullable();
    table.text('note');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('forms').raw("DROP TYPE IF EXISTS sex, education_grade");
};
