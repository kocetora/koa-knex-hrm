'use strict';
const { isLength } = require('validator');

const user = (ctx, next) => {
  const { username, password } = ctx.request.body;

  if (
    !username ||
    !isLength(username, {
      min: 2,
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Wrong username. Should be longer than 2 and shorter then 128'
    );
  }

  if (
    !password ||
    !isLength(password, {
      min: 6,
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Wrong password. Should be longer than 6 and shorter then 128'
    );
  }

  return next();
};

module.exports = {
  user,
};
