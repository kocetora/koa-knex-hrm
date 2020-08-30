'use strict';
const Services = require('../services/index');

const updateForm = async ctx => {
  try {
    await Services.updateForm(ctx.request.body);
    ctx.body = {
      status: true,
      message: 'Form successfully updated'
    };
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  updateForm,
};
