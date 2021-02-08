'use strict';
const Services = require('../services/index');

const login = async (ctx) => {
  try {
    const user = await Services.login(ctx.request.body);
    ctx.body = user;
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  login,
};
