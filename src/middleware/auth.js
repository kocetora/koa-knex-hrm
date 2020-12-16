'use strict';
const jwt = require('jsonwebtoken');
const privateKey = 'any very secret key';

module.exports = {
  getToken(userID, username, role) {
    const payload = { userId: userID, username, role };
    return jwt.sign(payload, privateKey, {
      algorithm: 'HS256',
      noTimestamp: true,
    });
  },
  decodeToken(token) {
    return jwt.verify(token, privateKey);
  },
};
