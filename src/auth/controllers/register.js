'use strict';
const Services = require('../services/index');

const register = async (ctx) => {
  try {
    await Services.register(ctx.request.body);
    ctx.body = 'Request processed successfully';
  } catch (err) {
    return ctx.throw(err.code, err.message);
  }
};

module.exports = {
  register,
};
