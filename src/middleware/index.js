'use strict';
const { check } = require('./check');
const { isAdmin } = require('./role');
const { isUser } = require('./role');

module.exports = {
  check,
  isAdmin,
  isUser,
};
