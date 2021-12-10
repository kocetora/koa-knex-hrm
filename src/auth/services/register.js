'use strict';
const queries = require('../queries/index');
const crypto = require("crypto");
const argon2 = require('argon2');

const register = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  const hash = await argon2.hash(password, crypto.randomBytes(16));
  if (user) {
    const error = new Error('Username is already taken');
    error.code = 409;
    throw error;
  } else {
    await queries.addUser({
      username,
      password: hash,
      email,
    });
  }
};

module.exports = {
  register,
};
