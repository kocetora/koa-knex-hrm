'use strict';
const Services = require('../services/index');

const addComment = async ctx => {
  try {
    const formid = ctx.params.formid;
    const body = ctx.request.body;
    await Services.addComment(formid, body);
    ctx.body = {
      status: true,
      message: 'Comment successfully added'
    };
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  addComment,
};
