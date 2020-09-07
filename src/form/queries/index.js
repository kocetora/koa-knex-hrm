'use strict';
const { addComment } = require('./addComment');
const { addForm } = require('./addForm');
const { addProfessions } = require('./addForm');
const { addMessengers } = require('./addForm');
const { addLanguageSkills } = require('./addForm');
const { deleteForm } = require('./deleteForm');
const { getComments } = require('./getComments');
const { updateForm } = require('./updateForm');
const { getForm } = require('./getForm');
const { getUser } = require('./getUser');

module.exports = {
  addComment,
  addForm,
  updateForm,
  getComments,
  deleteForm,
  getForm,
  addProfessions,
  addLanguageSkills,
  addMessengers,
  getUser,
};
