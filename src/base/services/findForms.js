'use strict';
const queries = require('../queries/index');

const findForms = async (
  {
    sex,
    education,
    age,
    height,
    workExperience,
    phoneNumber,
    expectedSalary,
    languageSkills,
    professions,
    messengers,
    submitted,
  },
  isPublic
) => {
  class Filter {
    constructor() {
      this.conditions = [];
    }

    static set() {
      return new Filter();
    }

    add(fn, condition) {
      this.conditions.push({ fn, condition });
      return this;
    }

    run(arg) {
      return new Promise(resolve => {
        arg.then(newArg => {
          const obj = this.conditions.shift();
          if (obj) {
            resolve(this.run(obj.fn(newArg, obj.condition)));
          }
          return resolve(arg);
        });
      });
    }
  }

  async function whereSex(formids, sex) {
    if (sex) {
      const ids = await queries.whereSex(formidsToArray(formids), sex);
      return ids;
    } else {
      return formids;
    }
  }

  async function whereEducation(formids, education) {
    if (education) {
      const ids = await queries.whereEducation(
        formidsToArray(formids),
        education
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereAge(formids, age) {
    if (age && age[0]) {
      const bornFrom = new Date(
        new Date() - age[0].to * (24 * 3600 * 365.25 * 1000)
      );
      const bornTo = new Date(
        new Date() - age[0].from * (24 * 3600 * 365.25 * 1000)
      );
      const ids = await queries.whereBorn(formidsToArray(formids), [
        bornFrom,
        bornTo,
      ]);
      return ids;
    } else {
      return formids;
    }
  }

  async function whereHeight(formids, height) {
    if (height && height[0]) {
      const ids = await queries.whereHeight(formidsToArray(formids), [
        height[0].from,
        height[0].to,
      ]);
      return ids;
    } else {
      return formids;
    }
  }

  async function whereWorkExperience(formids, workExperience) {
    if (workExperience) {
      const ids = await queries.whereWorkExperience(
        formidsToArray(formids),
        workExperience
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function wherePhoneNumber(formids, phoneNumber) {
    if (phoneNumber) {
      const ids = await queries.wherePhoneNumber(
        formidsToArray(formids),
        phoneNumber
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereExpectedSalary(formids, expectedSalary) {
    if (expectedSalary) {
      const ids = await queries.whereExpectedSalary(
        formidsToArray(formids),
        expectedSalary
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereLanguageSkills(formids, languageSkill) {
    if (languageSkill) {
      const ids = await queries.whereLanguageSkills(
        formidsToArray(formids),
        languageSkill.language,
        languageSkill.languageProficiency
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereProfessions(formids, professions) {
    if (professions && professions[0]) {
      const ids = await queries.whereProfessions(
        formidsToArray(formids),
        Array.from(professions, el => el.profession)
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereMessengers(formids, messengers) {
    if (messengers && messengers[0]) {
      const ids = await queries.whereMessengers(
        formidsToArray(formids),
        Array.from(messengers, el => el.messenger)
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereSubmitted(formids, submitted) {
    if (submitted) {
      const ids = await queries.whereSubmitted(
        formidsToArray(formids),
        new Date(submitted)
      );
      return ids;
    } else {
      return formids;
    }
  }

  async function whereIsPublic(formids, isPublic) {
    if (isPublic === true) {
      const ids = await queries.whereIsPublic(
        formidsToArray(formids),
        isPublic
      );
      return ids;
    } else {
      return formids;
    }
  }

  function formidsToArray(formids) {
    if (formids[0] && formids[0].formid) {
      return Array.from(formids, el => el.formid);
    } else if (formids[0] && formids[0].id) {
      return Array.from(formids, el => el.id);
    } else {
      return formids;
    }
  }

  async function result(formids) {
    const forms = await queries.getFormsById(formidsToArray(formids));
    return forms;
  }

  const r = async () => {
    const filter = Filter.set()
      .add(whereSex, sex)
      .add(whereEducation, education)
      .add(whereAge, age)
      .add(whereHeight, height)
      .add(whereWorkExperience, workExperience)
      .add(wherePhoneNumber, phoneNumber)
      .add(whereExpectedSalary, expectedSalary)
      .add(whereProfessions, professions)
      .add(whereMessengers, messengers)
      .add(whereSubmitted, submitted)
      .add(whereIsPublic, isPublic);
    if (languageSkills) {
      filter
        .add(whereLanguageSkills, languageSkills[0])
        .add(whereLanguageSkills, languageSkills[1]);
    }
    const res = await filter.add(result).run(queries.getFormIds());
    return res;
  };

  const forms = await r();
  for (const el of forms) {
    el.professions = await queries.getProfessions(el.id);
    el.messengers = await queries.getMessengers(el.id);
    el.languageSkills = await queries.getLanguageSkills(el.id);
    el.images = await queries.getImages(el.id);
  }
  return forms;
};

module.exports = {
  findForms,
};
