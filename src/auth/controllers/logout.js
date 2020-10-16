'use strict';

const logout = async (ctx) => {
  try {
    ctx.logout();
    ctx.body = {
      status: true,
      message: 'User successfully logged out',
    };
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  logout,
};
