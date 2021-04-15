'use strict';
const queries = require('../queries/index');

const clearTestUsers = async () => {
  const prefix = 'sk$**test_';
  await queries.clearTestUsers(prefix);
};

module.exports = {
  clearTestUsers,
};
