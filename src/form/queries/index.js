'use strict';
const { createComment } = require('./createComment');
const { createForm } = require('./createForm');
const { deleteForm } = require('./deleteForm');
const { getComments } = require('./getComments');
const { updateForm } = require('./updateForm');
const { getForm } = require('./getForm');

module.exports = {
  createComment,
  createForm,
  updateForm,
  getComments,
  deleteForm,
  getForm,
};
