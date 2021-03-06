'use strict';

const {
  getForms,
  getProfessions,
  getLanguageSkills,
  getMessengers,
  getImages,
} = require('./getForms');
const {
  getFormIds,
  getFormsById,
  whereSex,
  whereEducation,
  wherePhoneNumber,
  whereWorkExperience,
  whereBorn,
  whereExpectedSalary,
  whereLanguageSkills,
  whereHeight,
  whereIsPublic,
  whereProfessions,
  whereMessengers,
  whereSubmitted,
} = require('./filterForms');

module.exports = {
  getForms,
  getProfessions,
  getLanguageSkills,
  getMessengers,
  getFormIds,
  getImages,
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
