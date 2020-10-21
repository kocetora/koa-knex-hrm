'use strict';

const login = async(ctx) => {
  try {
    // TODO: jwt and session
    ctx.body = JSON.stringify({
      userid: 1,
      username: "Msr. User",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    });
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  login,
};