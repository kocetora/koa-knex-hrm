'use strict';
const Services = require('../services/index');

const getComments = async ctx => {
  try {
    ctx.body = await Services.getComments(ctx.params.formid);
    return ctx;
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  getComments,
};
