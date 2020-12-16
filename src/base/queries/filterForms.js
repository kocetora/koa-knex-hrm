'use strict';
const knex = require('../../db/knex');

const getFormIds = () => knex('forms').select('id');

const getFormsById = formids => knex('forms').whereIn('id', formids).select();

const whereSex = (formids, sex) =>
  knex('forms').whereIn('id', formids).where('sex', sex).select('id');

const whereEducation = (formids, education) =>
  knex('forms')
    .whereIn('id', formids)
    .where('education', education)
    .select('id');

const wherePhoneNumber = (formids, phoneNumber) =>
  knex('forms')
    .whereIn('id', formids)
    .where('phoneNumber', phoneNumber)
    .select('id');

const whereWorkExperience = (formids, workExperience) =>
  knex('forms')
    .whereIn('id', formids)
    .where('workExperience', '>=', workExperience)
    .select('id');

const whereExpectedSalary = (formids, expectedSalary) =>
  knex('forms')
    .whereIn('id', formids)
    .where('expectedSalary', '<=', expectedSalary)
    .select('id');

const whereBorn = (formids, born) =>
  knex('forms').whereIn('id', formids).whereBetween('born', born).select('id');

const whereHeight = (formids, height) =>
  knex('forms')
    .whereIn('id', formids)
    .whereBetween('height', height)
    .select('id');

const whereLanguageSkills = (formids, language, languageProficiency) => {
  const languageProficiencyEnum = ['basic', 'intermediate', 'fluent', 'native'];
  const minLangLevel = languageProficiencyEnum.slice(
    languageProficiencyEnum.indexOf(languageProficiency)
  );
  return knex('languageSkills')
    .whereIn('formid', formids)
    .where('language', language)
    .whereIn('languageProficiency', minLangLevel)
    // .where('languageProficiency', languageProficiency)
    .select('formid');
};

const whereProfessions = (formids, professions) =>
  knex('professions')
    .whereIn('formid', formids)
    .whereIn('profession', professions)
    .select('formid');

const whereMessengers = (formids, messengers) =>
  knex('messengers')
    .whereIn('formid', formids)
    .whereIn('messenger', messengers)
    .select();

const whereSubmitted = (formids, submitted) =>
  knex('forms')
    .whereIn('id', formids)
    .whereRaw('DATE(created_at) = ?', submitted)
    .select('id');

const whereIsPublic = (formids, isPublic) =>
  knex('forms').whereIn('id', formids).where('isPublic', isPublic).select('id');

module.exports = {
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
