'use strict';
const Services = require('../services/index');

const registerAdmin = async ctx => {
  try {
    await Services.registerAdmin(ctx.request.body);
    ctx.body = 'Request processed successfully';
  } catch (err) {
    ctx.status = err.code;
    ctx.body = err.message;
  }
};

module.exports = {
  registerAdmin,
};
