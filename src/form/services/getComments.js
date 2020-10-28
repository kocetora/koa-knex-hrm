'use strict';
const queries = require('../queries/index');

const getComments = async (formid) => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error("Form with this id doesn't exists");
    error.code = 404;
    throw error;
  }
  await queries.getComments(formid);
};

module.exports = {
  getComments,
};
