'use strict';
const queries = require('../queries/index');

const addComment = async (formid, { userid, comment }) => {
  const [form] = await queries.getForm(formid);
  const [user] = await queries.getUser(userid);
  if (!form || !user) {
    throw new Error('Form or user with this id doesn\'t exists');
  }
  await queries.addComment({ userid, formid, comment });
};

module.exports = {
  addComment,
};
