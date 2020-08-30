'use strict';
const queries = require('../queries/index');

const deleteForms = async ({
  formid
}) => {
  const [form] = await queries.getFormById(formid);
  if (!form) {
    throw new Error('Form with this id doesn\'t exists');
  }
  await queries.deleteForms(formid);
};

module.exports = {
  deleteForms,
};
