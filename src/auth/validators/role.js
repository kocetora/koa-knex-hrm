'use strict';
const { isIn } = require('validator');

const role = (ctx, next) => {
  const { role } = ctx.request.body;

  if (!role || !isIn(role, ['admin', 'user'])) {
    return ctx.throw(400, 'Incorrect role. May be admin or user');
  }

  return next();
};

module.exports = {
  role,
};
