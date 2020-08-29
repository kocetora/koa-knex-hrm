'use strict';

const jwtSecret = require('../config/jwtConfig');
const jwt = require('jsonwebtoken');
const passport = require('koa-passport');

const login = () => async (ctx, next) => {
  await passport.authenticate('local', (err, user, info) => {
    if (user === false) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        message: info.message
      };
      return next();
    } else {
      ctx.login(user);
      const payload = {
        userid: user.userid,
        username: user.username,
      };
      const token = jwt.sign(payload, jwtSecret.secret);
      ctx.status = 200;
      ctx.body = {
        userid: user.userid,
        username: user.username,
        token
      };
      return next();
    }
  })(ctx, next);
};

module.exports = login;
