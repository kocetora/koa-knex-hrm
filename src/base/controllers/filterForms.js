'use strict';
const Services = require('../services/index');

const filterForms = async ctx => {
  try {
    ctx.body = await Services.filterForms(ctx.request.body);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  filterForms,
};
