'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/auth'
});

router
  .post('/register', validators.emailAndPassword, validators.address, controllers.register)
  .post('/login', validators.emailAndPassword, controllers.login);

module.exports = router;
