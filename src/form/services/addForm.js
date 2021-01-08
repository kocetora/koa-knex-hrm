'use strict';
const queries = require('../queries/index');

const addForm = async ({
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
  isPublic,
  images,
}) => {
  const [id] = await queries.addForm({
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
    isPublic,
  });
  return Promise.all([
    queries.addProfessions(id, professions),
    queries.addMessengers(id, messengers),
    queries.addLanguageSkills(id, languageSkills),
    queries.addImages(id, images)
  ])
};

module.exports = {
  addForm,
};
