'use strict';
const { register } = require('./register');
const { registerAdmin } = require('./registerAdmin');
const { login } = require('./login');

module.exports = {
  registerAdmin,
  register,
  login,
};
