'use strict';
const Services = require('../services/index');

const getComments = async ctx => {
  try {
    ctx.body = await Services.getComments(ctx.params.formid);
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
};

module.exports = {
  getComments,
};
