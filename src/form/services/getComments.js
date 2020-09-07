'use strict';
const queries = require('../queries/index');

const getComments = async formid => await queries.getComments(formid);

module.exports = {
  getComments,
};
