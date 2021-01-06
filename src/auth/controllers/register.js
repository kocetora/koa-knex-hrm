'use strict';
const Services = require('../services/index');

const register = async ctx => {
  try {
    await Services.register(ctx.request.body);
    ctx.body = {
      success: true,
      message: 'Request processed successfully'
    };
  } catch (err) {
    ctx.status = err.code;
    ctx.body = err.message;
  }
};

module.exports = {
  register,
};
