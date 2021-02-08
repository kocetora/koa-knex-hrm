'use strict';
const knex = require('../../db/knex');

const addForm = form =>
  knex('forms')
    .insert({ ...form })
    .returning('id');

const addProfessions = (formid, professions) =>
  knex('professions').then(async () => {
    for (const el of professions) {
      await knex('professions').insert({ formid, ...el });
    }
  });

const addLanguageSkills = (formid, languageSkills) =>
  knex('languageSkills').then(async () => {
    for (const el of languageSkills) {
      await knex('languageSkills').insert({ formid, ...el });
    }
  });

const addMessengers = (formid, messengers) =>
  knex('messengers').then(async () => {
    for (const el of messengers) {
      await knex('messengers').insert({ formid, ...el });
    }
  });

const addImages = (formid, images) => 
  knex('images').then(async () => {
    for (const el of images) {
      await knex('images').insert({ formid, ...el });
    }
  });

module.exports = {
  addForm,
  addProfessions,
  addLanguageSkills,
  addMessengers,
  addImages,
};
