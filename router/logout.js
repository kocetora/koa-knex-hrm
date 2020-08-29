'use strict';

const logout = () => async (ctx, next) => {
  try {
    ctx.logout();
    ctx.body = {
      status: true,
      message: 'User logged out'
    };
    return next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: 'Bad request'
    };
    return next();
  }
};

module.exports = logout;
