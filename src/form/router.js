'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/form',
});

router
  .post('/api/form', validators.form, controllers.addForm)
  .put('/api/form/:formid', validators.form, controllers.updateForm)
  .get('/api/form/:formid', controllers.getForm)
  .delete('/api/form/:formid', controllers.deleteForm)
  .post('/api/form/:formid/comment', validators.comment, controllers.addComment)
  .get('/api/form/:formid/comment', controllers.getComments);

module.exports = router;
