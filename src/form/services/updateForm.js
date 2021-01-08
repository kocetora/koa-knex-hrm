'use strict';
const queries = require('../queries/index');

const updateForm = async (
  formid,
  {
    name,
    surname,
    middlename,
    born,
    sex,
    height,
    phoneNumber,
    email,
    prefferedRegion,
    education,
    expectedSalary,
    workExperience,
    unemployedFor,
    note,
    messengers,
    professions,
    languageSkills,
    images,
  }
) => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error('Form with this id doesn\'t exist');
    error.code = 404;
    throw error;
  }
  await queries.updateForm(formid, {
    name,
    surname,
    middlename,
    born,
    sex,
    height,
    phoneNumber,
    email,
    prefferedRegion,
    education,
    expectedSalary,
    workExperience,
    unemployedFor,
    note,
    updated_at: new Date(),
  });
  await Promise.all([
    queries.updateProfessions(formid, professions),
    queries.updateMessengers(formid, messengers),
    queries.updateLanguageSkills(formid, languageSkills),
    queries.updateImages(formid, images)
  ])
  const [result] = await queries.getForm(formid);
    result.professions = await queries.getProfessions(formid);
    result.messengers = await queries.getMessengers(formid);
    result.languageSkills = await queries.getLanguageSkills(formid);
    result.images = await queries.getImages(formid);

  return result;
};

module.exports = {
  updateForm,
};
