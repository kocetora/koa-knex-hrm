'use strict';
const Services = require('../services/index');

const findForms = async ctx => {
  try {
    ctx.body = await Services.findForms(ctx.request.body);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  findForms,
};
