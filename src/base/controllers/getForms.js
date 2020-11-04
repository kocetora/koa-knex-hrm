'use strict';
const Services = require('../services/index');

const getForms = async ctx => {
  try {
    ctx.body = await Services.getForms();
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  getForms,
};
