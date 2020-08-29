'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/base',
});

router
  .get('/api/forms', controllers.getForms)
  .post('/api/forms', validators.filter, controllers.filterForms);

module.exports = router;
