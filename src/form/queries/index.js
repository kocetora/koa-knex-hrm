'use strict';

const {
  addForm,
  addProfessions,
  addMessengers,
  addLanguageSkills,
  addImages,
} = require('./addForm');
const {
  updateForm,
  updateProfessions,
  updateMessengers,
  updateLanguageSkills,
  updateImages,
} = require('./updateForm');
const {
  getForm,
  getProfessions,
  getMessengers,
  getLanguageSkills,
  getImages,
} = require('./getForm');
const { deleteForm } = require('./deleteForm');
const { addComment } = require('./addComment');
const { getComments } = require('./getComments');
const { getUser } = require('./getUser');

module.exports = {
  addForm,
  addImages,
  addProfessions,
  addLanguageSkills,
  addMessengers,
  updateForm,
  updateProfessions,
  updateLanguageSkills,
  updateMessengers,
  updateImages,
  getForm,
  getProfessions,
  getLanguageSkills,
  getMessengers,
  getImages,
  deleteForm,
  addComment,
  getComments,
  getUser,
};
