'use strict';
const { isLength, isEmail } = require('validator');

const register = (ctx, next) => {
  const { address, password, email } = ctx.request.body;

  if (
    !address ||
    !isLength(address, {
      min: 2,
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Wrong address. Should be longer than 2 and shorter then 128'
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

  if (
    !email ||
    !isEmail(email, {
      max: 128,
    })
  ) {
    return ctx.throw(400, 'Incorrect email. Should be longer than 6 and shorter then 128');
  }

  return next();
};

module.exports = {
  register,
};
