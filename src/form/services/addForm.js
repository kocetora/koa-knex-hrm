'use strict';
const queries = require('../queries/index');

const addForm = async ({
  id,
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
  const [formid] = await queries.addForm({
    id,
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
    queries.addProfessions(formid, professions),
    queries.addMessengers(formid, messengers),
    queries.addLanguageSkills(formid, languageSkills),
    queries.addImages(formid, images),
  ]);
};

module.exports = {
  addForm,
};
