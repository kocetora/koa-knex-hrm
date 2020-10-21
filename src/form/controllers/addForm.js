'use strict';
const Services = require('../services/index');

const addForm = async(ctx) => {
  try {
    ctx.body = await Services.addForm(ctx.request.body);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  addForm,
};