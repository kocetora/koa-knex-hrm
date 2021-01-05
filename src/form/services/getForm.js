'use strict';
const queries = require('../queries/index');

const getForm = async formid => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error('Form with this id doesn\'t exist');
    error.code = 404;
    throw error;
  } else {
    form.professions = await queries.getProfessions(formid);
    form.messengers = await queries.getMessengers(formid);
    form.languageSkills = await queries.getLanguageSkills(formid);
    form.images = await queries.getImages(formid);
    return form;
  }
};

module.exports = {
  getForm,
};
