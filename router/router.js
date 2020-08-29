'use strict';
const Router = require('koa-router');

// const login = require('./login');
const logout = require('./logout');
const register = require('./register');
// const createForm = require('./createForm');
// const updateForm = require('./updateForm');
// const deleteForm = require('./deleteForm');
// const findAllForms = require('./findAllForms');
// const findOneForm = require('./findOneForm');
// const filterForms = require('./filterForms');
// const postComment = require('./postComment');
// const getComment = require('./getComment');
// const passport = require('koa-passport');

module.exports = new Router()
  // .post('/api/login', login())
  .post('/api/register', register())
  .get('/api/logout', logout());

// .post('/api/form', createForm())
//     .put('/api/form/:formid',
//         passport.authenticate('jwt', { session: false }),
//         updateForm())
//     .get('/api/form/:formid',
//         passport.authenticate('jwt', { session: false }),
//         findOneForm())
//     .delete('/api/form/:formid',
//         passport.authenticate('jwt', { session: false }),
//         deleteForm())

// .get('/api/forms',
//         passport.authenticate('jwt', { session: false }),
//         findAllForms())
//     .post('/api/forms',
//         passport.authenticate('jwt', { session: false }),
//         filterForms())

// .post('/api/form/:formid/comment',
//         passport.authenticate('jwt', { session: false }),
//         postComment())
//     .get('/api/form/:formid/comment',
//         passport.authenticate('jwt', { session: false }),
//         getComment());
