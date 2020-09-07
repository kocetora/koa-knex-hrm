'use strict';

const { isInt } = require('validator');

const userid = (ctx, next) => {
  const { userid } = ctx.request.body;

  if (!userid || !isInt(userid.toString(), {
    min: 1,
    max: 2147483647
  })) {
    return ctx.throw(400,
      'Incorrect userid. Should be bigger than 1 and less then 2147483647');
  }

  return next();
};

module.exports = {
  userid,
};
