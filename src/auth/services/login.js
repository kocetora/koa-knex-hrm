'use strict';
const queries = require('../queries/index');
const auth = require('../../middleware/auth');
const argon = require('argon2');
const { findUser } = require('./findUser');

const login = async ({ email, password }) => {
  const id = findUser(email)
  if (id != null) {
    const [user] = await queries.getUser(id);
    const passwordFromHash = await argon.verify(user.password, password);
    if (passwordFromHash) {
      return {
        userid: user.id,
        address: user.address,
        email: user.email,
        token: auth.getToken(user.id, user.email),
      };
    } else {
      const error = new Error('email or password is incorrect');
      error.code = 401;
      throw error;
    }
  } else {
    const error = new Error('User with this email doesn\'t exist');
    error.code = 404;
    throw error;
  }
};

module.exports = {
  login,
};
