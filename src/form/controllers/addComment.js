'use strict';
const Services = require('../services/index');

const addComment = async ctx => {
  try {
    const formid = ctx.params.formid;
    const body = ctx.request.body;
    await Services.addComment(formid, body);
    ctx.body = {
      success: true,
      message: 'Request processed successfully'
    };
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  addComment,
};
