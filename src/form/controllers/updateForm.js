'use strict';
const Services = require('../services/index');

const updateForm = async ctx => {
  try {
    const formid = ctx.params.formid;
    const body = ctx.request.body;
    ctx.body = await Services.updateForm(formid, body);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  updateForm,
};
