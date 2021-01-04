'use strict';
const { register } = require('./register');
const { registerAdmin } = require('./registerAdmin');
const { login } = require('./login');
const { logout } = require('./logout');

module.exports = {
  register,
  registerAdmin,
  login,
  logout,
};
