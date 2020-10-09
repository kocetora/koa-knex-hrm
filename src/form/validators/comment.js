'use strict';

const { isLength } = require('validator');

const comment = (ctx, next) => {
  const { comment } = ctx.request.body;

  if (
    !comment ||
    !isLength(comment, {
      min: 1,
      max: 128,
    })
  ) {
    return ctx.throw(
      400,
      'Incorrect comment. Should be longer than 1 and shorter then 128'
    );
  }

  return next();
};

module.exports = {
  comment,
};
