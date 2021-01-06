'use strict';
const queries = require('../queries/index');

const addComment = async (formid, { userid, username, comment }) => {
  const [form] = await queries.getForm(formid);
  const [user] = await queries.getUser(userid);
  if (!form || !user) {
    const record = form ? 'User' : 'Form';
    const error = new Error(record + ' with this id doesn\'t exist');
    error.code = 404;
    throw error;
  }
  await queries.addComment({ userid, username, formid, comment });
};

module.exports = {
  addComment,
};
