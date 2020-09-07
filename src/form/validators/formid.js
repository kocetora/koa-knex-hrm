'use strict';

const { isInt } = require('validator');

const formid = (ctx, next) => {
  const formid = ctx.params.formid;

  if (!formid || !isInt(formid.toString(), {
    min: 1,
    max: 2147483647
  })) {
    return ctx.throw(400,
      'Incorrect formid. Should be bigger than 1 and less then 2147483647');
  }

  return next();
};

module.exports = {
  formid,
};
