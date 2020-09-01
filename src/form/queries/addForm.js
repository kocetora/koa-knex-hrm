'use strict';
const knex = require('../../db/knex');

const addForm = form => knex('forms')
  .insert({...form })
  .returning('id')
  .catch((err) => console.log(err));

const addProfessions = (formid, professions) => knex('professions')
  .then(() => {
    professions.forEach(async el => {
      await knex('professions').insert({ formid, ...el })
    });
  });

const addLanguageSkills = (formid, languageSkills) => knex('languageSkills')
  .then(() => {
    languageSkills.forEach(async el => {
      await knex('languageSkills').insert({ formid, ...el })
    });
  });

const addMessengers = (formid, messengers) => knex('messengers')
  .then(() => {
    messengers.forEach(async el => {
      await knex('messengers').insert({ formid, ...el })
    });
  });

module.exports = {
  addForm,
  addProfessions,
  addLanguageSkills,
  addMessengers,
};