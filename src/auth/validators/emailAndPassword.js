'use strict';
const { isLength, isEmail } = require('validator');

const emailAndPassword = (ctx, next) => {
  const { password, email } = ctx.request.body;

  if (
    !password ||
    !isLength(password, {
      min: 6,
      max: 128
    })
  ) {
    return ctx.throw(400, 'Wrong password. Should be longer than 6 and shorter then 128');
  }

  if (
    !email ||
    !isEmail(email, {
      max: 128
    })
  ) {
    return ctx.throw(400, 'Incorrect email. Should be longer than 6 and shorter then 128');
  }

  return next();
};

module.exports = {
  emailAndPassword
};
