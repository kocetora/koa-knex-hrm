'use strict';
const knex = require('../../db/knex');

const updateForm = (formid, form) =>
  knex('forms')
    .where({ id: formid })
    .update({ ...form });

const updateProfessions = (formid, professions) =>
  knex('professions')
    .where({ formid })
    .del()
    .then(async () => {
      for (const el of professions) {
        await knex('professions').insert({ formid, ...el });
      }
    });

const updateLanguageSkills = (formid, languageSkills) =>
  knex('languageSkills')
    .where({ formid })
    .del()
    .then(async () => {
      for (const el of languageSkills) {
        await knex('languageSkills').insert({ formid, ...el });
      }
    });

const updateMessengers = (formid, messengers) =>
  knex('messengers')
    .where({ formid })
    .del()
    .then(async () => {
      for (const el of messengers) {
        await knex('messengers').insert({ formid, ...el });
      }
    });

const updateImages = (formid, images) =>
  knex('images')
    .where({ formid })
    .del()
    .then(async () => {
      for (const el of images) {
        await knex('images').insert({ formid, ...el });
      }
    });

module.exports = {
  updateForm,
  updateProfessions,
  updateLanguageSkills,
  updateMessengers,
  updateImages,
};
