'use strict';
const queries = require('../queries/index');

const getForm = async (formid) => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    throw new Error("Forms with this id doesn't exists");
  } else {
    form.professions = await queries.getProfessions(formid);
    form.messengers = await queries.getMessengers(formid);
    form.languageSkills = await queries.getLanguageSkills(formid);
    return form;
  }
};

module.exports = {
  getForm,
};
