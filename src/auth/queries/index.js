'use strict';
const { addUser } = require('./addUser');
const { getUser } = require('./getUser');
const { clearTestUsers } = require('./clearTestUsers')

module.exports = {
  addUser,
  getUser,
  clearTestUsers,
};
