'use strict';
const Services = require('../services/index');

const deleteForm = async (ctx) => {
  try {
    const formid = ctx.params.formid;
    await Services.deleteForm(formid);
    ctx.body = 'Request processed successfully';
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  deleteForm,
};
