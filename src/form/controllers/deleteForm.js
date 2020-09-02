'use strict';
const Services = require('../services/index');

const deleteForm = async ctx => {
  try {
    const formid = ctx.params.formid;
    await Services.deleteForm(formid);
    ctx.body = {
      status: true,
      message: 'Form successfully deleted'
    };
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  deleteForm,
};
