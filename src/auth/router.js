'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');
const middlewares = require('../middleware/index');

const router = new Router({
  prefix: '/auth',
});

router
  .post('/register', validators.user, controllers.register)
  .post('/login', validators.user, controllers.login)
  .get('/logout', middlewares.check, controllers.logout)

module.exports = router;
