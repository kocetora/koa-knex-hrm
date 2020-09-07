'use strict';
const knex = require('../../db/knex');

const getForm = id => knex('forms')

// languages: {
//   type: 'array',
//   items: languageSkill,
// },
// submitted: {
//   type: 'string',
//   description: 'Must be a valid ISO Date',
// },

// .whereIn('professions', professions)
// .where({sex})
// .where({education})
// .where({phoneNumber})
// .whereBetween('expectedSalary', expectedSalary)
// .whereBetween('workExperience', workExperience)
// .whereBetween('height', height)
// .whereBetween('age', age)

.leftJoin('professions', function() {
    this.on('professions.formid', '=', 'forms.id');
  })
  .leftJoin('messengers', function() {
    this.on('messengers.formid', '=', 'forms.id');
  })
  .leftJoin('languageSkills', function() {
    this.on('languageSkills.formid', '=', 'forms.id');
  })
  .select('forms.id').distinct();

// const getProfessions = formid => knex('professions')
//   .where({ formid })
//   .select();

// const getLanguageSkills = formid => knex('LanguageSkills')
//   .where({ formid })
//   .select();

// const getMessengers = formid => knex('Messengers')
//   .where({ formid })
//   .select();

// var questionObjects = [{id: 5, name: abc}, {id: 6, name: xyz}];
// // first query makes something like this array ^^, then..
// questionObjects.forEach(function(question, index) {
//   this.knex.select('answersTable.answers').from('questionsTable').leftJoin(
//   'answersTable',
//   'answersTable.questionId',
//   'questionsTable.id').where('answersTable.questionId', question.id})
//   .then(function(answers) {
//     answers = answers.map(/*make your answers look the way you want...*/)
//     questionObjects[index].answers = answers;
//   })

module.exports = {
  getForm
};