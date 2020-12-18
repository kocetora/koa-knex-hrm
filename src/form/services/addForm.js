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
  isPublic,
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
    isPublic,
  });
  return Promise.all([
    queries.addProfessions(id, professions),
    queries.addMessengers(id, messengers),
    queries.addLanguageSkills(id, languageSkills)
  ])
};

module.exports = {
  addForm,
};
