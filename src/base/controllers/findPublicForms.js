'use strict';
const Services = require('../services/index');

const findPublicForms = async ctx => {
  try {
    ctx.body = await Services.findForms(ctx.request.body, true);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  findPublicForms,
};
