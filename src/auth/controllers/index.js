'use strict';
const { register } = require('./register');
const { registerAdmin } = require('./registerAdmin');
const { login } = require('./login');
const { logout } = require('./logout');
const { clearTestUsers } = require('./clearTestUsers')

module.exports = {
  register,
  registerAdmin,
  login,
  logout,
  clearTestUsers,
};
