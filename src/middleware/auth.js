'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_KEY;

module.exports = {
  getToken(userId, email) {
    const payload = { userId, email };
    return jwt.sign(payload, privateKey, {
      algorithm: 'HS256',
      noTimestamp: true
    });
  },
  decodeToken(token) {
    return jwt.verify(token, privateKey);
  }
};
