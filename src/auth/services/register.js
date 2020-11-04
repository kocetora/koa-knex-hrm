'use strict';
const queries = require('../queries/index');

const register = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  if (user) {
    const error = new Error('Username is already taken');
    error.code = 409;
    throw error;
  } else {
    await queries.addUser({ username, password });
  }
};

module.exports = {
  register,
};
