'use strict';
const Services = require('../services/index');

const register = async ctx => {
  try {
    await Services.register(ctx.request.body);
    ctx.body = {
      status: true,
      message: 'User successfully registered',
    };
  } catch (err) {
    return ctx.throw(400, err);
  }
};

module.exports = {
  register,
};
