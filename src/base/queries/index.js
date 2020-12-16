'use strict';
const { getForms } = require('./getForms');
const { getProfessions } = require('./getForms');
const { getLanguageSkills } = require('./getForms');
const { getMessengers } = require('./getForms');
const { getFormIds } = require('./filterForms');
const { getFormsById } = require('./filterForms');
const { whereSex } = require('./filterForms');
const { whereEducation } = require('./filterForms');
const { wherePhoneNumber } = require('./filterForms');
const { whereWorkExperience } = require('./filterForms');
const { whereExpectedSalary } = require('./filterForms');
const { whereBorn } = require('./filterForms');
const { whereHeight } = require('./filterForms');
const { whereLanguageSkills } = require('./filterForms');
const { whereProfessions } = require('./filterForms');
const { whereMessengers } = require('./filterForms');
const { whereSubmitted } = require('./filterForms');
const { whereIsPublic } = require('./filterForms');

module.exports = {
  getForms,
  getProfessions,
  getLanguageSkills,
  getMessengers,
  getFormIds,
  getFormsById,
  whereSex,
  whereEducation,
  wherePhoneNumber,
  whereWorkExperience,
  whereExpectedSalary,
  whereBorn,
  whereHeight,
  whereLanguageSkills,
  whereProfessions,
  whereMessengers,
  whereSubmitted,
  whereIsPublic,
};
