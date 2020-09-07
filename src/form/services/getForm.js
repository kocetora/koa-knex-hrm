'use strict';
const queries = require('../queries/index');

const getForm = async formid => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    throw new Error('Forms with this id doesn\'t exists');
  }
  return form;
};

module.exports = {
  getForm,
};