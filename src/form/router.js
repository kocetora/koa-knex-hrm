'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');
const middlewares = require('../middleware/index');

const router = new Router({
  prefix: '/form',
});

router
  .post('/', validators.form, controllers.addForm)
  .put(
    '/:formid',
    middlewares.check,
    validators.form,
    validators.formid,
    controllers.updateForm
  )
  .delete(
    '/:formid',
    middlewares.check,
    validators.formid,
    controllers.deleteForm
  )
  .post(
    '/:formid/comment',
    middlewares.check,
    validators.formid,
    validators.userid,
    validators.comment,
    controllers.addComment
  )
  .get(
    '/:formid/comment',
    middlewares.check,
    validators.formid,
    controllers.getComments
  );

module.exports = router;
