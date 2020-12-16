'use strict';
const queries = require('../queries/index');
const argon = require('argon2');

const register = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  const password_hash = await argon.hash(password);
  if (user) {
    const error = new Error('Username is already taken');
    error.code = 409;
    throw error;
  } else {
    await queries.addUser({
      username,
      password_hash,
      role: 'user',
    });
  }
};

module.exports = {
  register,
};
