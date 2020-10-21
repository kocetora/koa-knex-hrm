'use strict';
const queries = require('../queries/index');

const getForms = async() => {
  const forms = await queries.getForms();
  for (const el of forms) {
    el.professions = await queries.getProfessions(el.id);
    el.messengers = await queries.getMessengers(el.id);
    el.languageSkills = await queries.getLanguageSkills(el.id);
  }
  return forms;
};

module.exports = {
  getForms,
};