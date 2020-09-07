'use strict';
const Services = require('../services/index');

const getForm = async ctx => {
  try {
    const formid = ctx.params.formid;
    ctx.body = await Services.getForm(formid);
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  getForm,
};
