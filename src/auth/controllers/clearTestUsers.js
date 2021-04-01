'use strict';
const Services = require('../services/index');

const clearTestUsers = async (ctx) => {
  try {
    const user = await Services.clearTestUsers(ctx.request.body);
    ctx.body = {
        success: true,
        message: 'Request processed successfully',
      };
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  clearTestUsers,
};
