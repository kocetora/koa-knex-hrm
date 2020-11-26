'use strict';
const queries = require('../queries/index');
const auth = require('../../middleware/auth')

const login = async ({ username, password }) => {
  const [user] = await queries.getUser(username);
  if (user) {
    if (username === user.username && password === user.password) {
      return {
        userid: user.id, 
        username: user.username, 
        token: auth.getToken(user.id, user.username)
      }
    } else {
      const error = new Error('Username or password incorrect');
      error.code = 401;
      throw error
    }
  } else {
    const error = new Error('User with this username doesn\'t exist');
    error.code = 404;
    throw error
  }
};

module.exports = {
  login,
};
