'use strict';
const auth = require('./auth');

const isAdmin = (ctx, next) => {
  const token = ctx.headers.authorization.replace('Bearer ', '');
  if (auth.decodeToken(token).role !== 'admin')
    return ctx.throw(
      403,
      'Access denied. You must have admin rights to do this.'
    );

  return next();
};

const isUser = (ctx, next) => {
  const token = ctx.headers.authorization.replace('Bearer ', '');
  if (auth.decodeToken(token).role !== ('admin' || 'user'))
    return ctx.throw(
      403,
      'Access denied. You must have user rights to do this.'
    );

  return next();
};

module.exports = {
  isAdmin,
  isUser,
};
