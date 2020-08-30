'use strict';
const queries = require('../queries/index');

const getForms = async ({
  formid
}) => {
  const [form] = await queries.getForms(formid);
  if (!form) {
    throw new Error('Forms with this id doesn\'t exists');
  }
};

module.exports = {
  getForms,
};
