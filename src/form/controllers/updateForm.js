'use strict';
const Services = require('../services/index');

const updateForm = async (ctx) => {
  try {
    const formid = ctx.params.formid;
    const body = ctx.request.body;
    ctx.body = await Services.updateForm(formid, body);
    // ctx.body = {
    //   status: true,
    //   message: 'Form successfully updated'
    // };
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  updateForm,
};
