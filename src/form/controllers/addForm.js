'use strict';
const Services = require('../services/index');

const addForm = async (ctx) => {
  try {
    ctx.body = await Services.addForm(ctx.request.body);
    // ctx.body = {
    //   status: true,
    //   message: 'Form successfully added'
    // };
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  addForm,
};
