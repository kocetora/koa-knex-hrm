'use strict';
const queries = require('../queries/index');

const addForm = async ({
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
}) => {
  const [id] = await queries.addForm({
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
  await queries.addProfessions(id, professions);
  await queries.addMessengers(id, messengers);
  await queries.addLanguageSkills(id, languageSkills);
  const result = await queries.getForm(id);
  return result;
};

module.exports = {
  addForm,
};
