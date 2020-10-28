'use strict';
const queries = require('../queries/index');

const updateForm = async (
  formid,
  {
    name,
    surname,
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
  }
) => {
  const [form] = await queries.getForm(formid);
  if (!form) {
    const error = new Error("Form with this id doesn't exists");
    error.code = 404;
    throw error;
  }
  await queries.updateForm(formid, {
    name,
    surname,
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
  });
  try {
    await queries.updateProfessions(formid, professions);
    await queries.updateMessengers(formid, messengers);
    await queries.updateLanguageSkills(formid, languageSkills);
    const result = await queries.getForm(formid);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateForm,
};
