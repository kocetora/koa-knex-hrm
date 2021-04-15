'use strict';
const { register } = require('./register');
const { registerAdmin } = require('./registerAdmin');
const { login } = require('./login');
const { clearTestUsers } = require('./clearTestUsers');

module.exports = {
  registerAdmin,
  register,
  login,
  clearTestUsers,
};
