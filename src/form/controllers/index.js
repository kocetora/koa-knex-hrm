'use strict';
const { addComment } = require('./addComment');
const { addForm } = require('./addForm');
const { deleteForm } = require('./deleteForm');
const { getComments } = require('./getComments');
const { updateForm } = require('./updateForm');
const { getForm } = require('./getForm');

module.exports = {
  addComment,
  addForm,
  updateForm,
  getComments,
  deleteForm,
  getForm,
};
