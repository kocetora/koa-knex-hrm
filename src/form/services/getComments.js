'use strict';
const queries = require('../queries/index');

const getComments = async ({
  formid
}) => {
  const [comment] = await queries.getComments(formid);
  if (!comment) {
    throw new Error('Comments with this formid doesn\'t exists');
  }
};

module.exports = {
  getComments,
};
