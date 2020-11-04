'use strict';

const form = {
  id: 2147483646,
  name: 'mvlsd',
  surname: 'ldslv',
  sex: 'female',
  born: '2001-05-05',
  height: 30,
  phoneNumber: '23438',
  email: 'kldslv@nvd.com',
  education: 'primary',
  expectedSalary: 688,
  prefferedRegion: 'mldslv',
  workExperience: 27,
  unemployedFor: 12,
  note: 'sdv',
};

function createForm(knex) {
  return knex('forms')
    .del()
    .then(() => knex('forms').insert({ ...form }))
    .catch((err) => console.log('Seeding createForm error:' + err));
}

exports.seed = createForm;
