'use strict';
const queries = require('../queries/index');
const auth = require('../../middleware/auth');
const argon = require('argon2');

const login = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  if (user) {
    const passwordFromHash = await argon.verify(user.password, password);
    if (username === user.username && passwordFromHash) {
      return {
        userid: user.id,
        username: user.username,
        email: user.email,
        token: auth.getToken(user.id, user.username),
      };
    } else {
      const error = new Error('Username or password is incorrect');
      error.code = 401;
      throw error;
    }
  } else {
    const error = new Error('User with this username doesn\'t exist');
    error.code = 404;
    throw error;
  }
};

module.exports = {
  login,
};
