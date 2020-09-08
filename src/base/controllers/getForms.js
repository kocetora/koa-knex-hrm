'use strict';
const Services = require('../services/index');

const getForms = async ctx => {
  try {
    ctx.body = await Services.getForms();
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  getForms,
};
