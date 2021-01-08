'use strict';
const Services = require('../services/index');

const addForm = async ctx => {
  try {
    await Services.addForm(ctx.request.body);
    ctx.body = {
      success: true,
      message: 'Request processed successfully',
    };
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  addForm,
};
