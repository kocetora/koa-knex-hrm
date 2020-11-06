'use strict';
const queries = require('../queries/index');

const getComments = async formid => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error('Form with this id doesn\'t exist');
    error.code = 404;
    throw error;
  }
  const comments = await queries.getComments(formid);
  return comments;
};

module.exports = {
  getComments,
};
