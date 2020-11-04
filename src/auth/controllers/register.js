'use strict';
const Services = require('../services/index');

const register = async ctx => {
  try {
    await Services.register(ctx.request.body);
    ctx.body = {
      success: true,
      message: 'User successfully registered',
    };
  } catch (err) {
    ctx.status = err.code;
    ctx.body = {
      success: false,
      message: err.message,
    };
  }
};

module.exports = {
  register,
};
