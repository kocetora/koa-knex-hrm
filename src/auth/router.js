'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/auth',
});

router
  .post('/register', validators.user, controllers.register)
  .post('/login', validators.user, controllers.login)
  .get('/logout', controllers.logout);

module.exports = router;