'use strict';
const auth = require('./auth');

const check = (ctx, next) => {
  if (ctx.headers.authorization) {
    const token = ctx.headers.authorization.replace('Bearer ', '');
    try {
      auth.decodeToken(token);
    } catch (err) {
      return ctx.throw(401, 'Bearer Token is invalid');
    }
  } else {
    return ctx.throw(401, 'Authorization Bearer Token required');
  }

  return next();
};

module.exports = {
  check
};
