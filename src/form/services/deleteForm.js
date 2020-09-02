'use strict';
const queries = require('../queries/index');

const deleteForm = async formid => {
  console.log(formid);
  const [form] = await queries.getForm(formid);
  if (!form) {
    throw new Error('Form with this id doesn\'t exists');
  }
  await queries.deleteForm(formid);
};

module.exports = {
  deleteForm,
};
