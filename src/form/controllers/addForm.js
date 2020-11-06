'use strict';
const Services = require('../services/index');

const addForm = async ctx => {
  try {
    await Services.addForm(ctx.request.body);
    ctx.body = 'Request processed successfully';
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  addForm,
};
