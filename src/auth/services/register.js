'use strict';
const queries = require('../queries/index');

const register = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  if (user) {
    throw new Error('Username with this id already exists');
  } else {
    await queries.addUser({ username, password });
  }
};

module.exports = {
  register,
};
