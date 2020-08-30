'use strict';
const Services = require('../services/index');

const getForm = async ctx => {
  try {
    ctx.body = await Services.getForm(ctx.request.body);
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  getForm,
};
