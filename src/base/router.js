'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');
const middleware = require('../middleware/index');

const router = new Router({
  prefix: '/base',
});

router
  .post('/', middleware.check, validators.filter, controllers.findForms)
  .post('/public', validators.filter, controllers.findPublicForms);

module.exports = router;
