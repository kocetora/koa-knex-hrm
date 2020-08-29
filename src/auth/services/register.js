'use strict';
const queries = require('../queries/index');

const register = async ({ username, password }) => {
  {
    const [user] = await queries.createUser({
      username,
      password
    });
    if (!user) {
      throw new Error('User with this username already exists');
    }
  }
};

module.exports = {
  register,
};
