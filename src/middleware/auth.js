'use strict';
require('dotenv').config()
const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_KEY;

module.exports = {
  getToken(userId, username) {
    const payload = { userId, username };
    return jwt.sign(payload, privateKey, {
      algorithm: 'HS256',
      noTimestamp: true,
    });
  },
  decodeToken(token) {
    return jwt.verify(token, privateKey);
  },
};
