'use strict';
const Services = require('../services/index');

const register = async(ctx) => {
  await Services.register(ctx.request.body);
  try {
    await Services
    ctx.body = {
      status: true,
      message: 'User successfully registered'
    };
  } catch (err) {
    return ctx.throw(400, error);
  }
}

module.exports = {
  register,
};