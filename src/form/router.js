'use strict';
const Router = require('koa-router');
const controllers = require('./controllers/index');
const validators = require('./validators/index');

const router = new Router({
  prefix: '/form',
});

router
  .post('/', validators.form, controllers.addForm)
  .put('/:formid', validators.form, validators.formid, controllers.updateForm)
  .get('/:formid', validators.formid, controllers.getForm)
  .delete('/:formid', validators.formid, controllers.deleteForm)
  .post(
    '/:formid/comment',
    validators.formid,
    validators.userid,
    validators.comment,
    controllers.addComment
  )
  .get(
    '/:formid/comment',
    validators.formid,
    validators.userid,
    controllers.getComments
  );

module.exports = router;
