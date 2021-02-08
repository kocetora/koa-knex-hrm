'use strict';
const knex = require('../../db/knex');

const getForms = () => knex('forms').select();

const getProfessions = (formid) =>
  knex('professions').where({ formid }).select('profession');

const getLanguageSkills = (formid) =>
  knex('languageSkills')
    .where({ formid })
    .select('language', 'languageProficiency');

const getMessengers = (formid) =>
  knex('messengers').where({ formid }).select('messenger', 'info');

const getImages = (formid) =>
  knex('images').where({ formid }).select('avatar', 'primary');

module.exports = {
  getForms,
  getProfessions,
  getLanguageSkills,
  getMessengers,
  getImages,
};
