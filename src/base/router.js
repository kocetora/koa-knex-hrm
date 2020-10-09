'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/base',
});

router.get('/', controllers.getForms).post('/', validators.filter);

module.exports = router;
