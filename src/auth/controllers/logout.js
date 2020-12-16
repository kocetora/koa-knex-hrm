'use strict';

const logout = async ctx => {
  try {
    // TODO: jwt and session
    // ctx.logout();
    // ctx.redirect('/');
    ctx.body = 'Request processed successfully';
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  logout,
};
