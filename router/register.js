'use strict';
const knex = require('../db/knex');
const register = () => async (ctx, next) => {
  const body = ctx.request.body;
  await Promise.all([
    knex('users').insert(body)
  ])
    .then(() => {
      console.log(ctx);
      ctx.status = 200;
      ctx.body = {
        success: true,
        message: 'User created!'
      };
      return next();
    })
    .catch((err) => {
      ctx.status = 400;
      ctx.body = {
        success: false,
        message: 'Bad data',
        error: err
      };
      return next();
    });
};

module.exports = register;
