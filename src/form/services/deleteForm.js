'use strict';
const queries = require('../queries/index');

const deleteForm = async formid => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error('Form with this id doesn\'t exist');
    error.code = 404;
    throw error;
  }
  await queries.deleteForm(formid);
};

module.exports = {
  deleteForm,
};
