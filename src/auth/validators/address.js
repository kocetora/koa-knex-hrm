'use strict';
const { isLength } = require('validator');

const address = (ctx, next) => {
  const { address } = ctx.request.body;

  if (
    !address ||
    !isLength(address, {
      min: 2,
      max: 128
    })
  ) {
    return ctx.throw(400, 'Wrong address. Should be longer than 2 and shorter then 128');
  }

  return next();
};

module.exports = {
  address
};
