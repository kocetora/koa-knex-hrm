'use strict';
const Services = require('../services/index');

const getForm = async(ctx) => {
  try {
    const formid = ctx.params.formid;
    ctx.body = await Services.getForm(formid);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  getForm,
};