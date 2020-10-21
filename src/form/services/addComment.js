'use strict';
const queries = require('../queries/index');

const addComment = async(formid, { userid, comment }) => {
  const [form] = await queries.getForm(formid);
  const [user] = await queries.getUser(userid);
  if (!form || !user) {
    const record = form ? "User" : "Form";
    const error = new Error(record + " with this id doesn't exists");
    error.code = 404;
    throw error;
  }
  await queries.addComment({ userid, formid, comment });
};

module.exports = {
  addComment,
};