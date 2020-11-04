'use strict';
// eslint-disable-next-line
const app = require('../../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
const knex = require('../../db/knex');
const { expect } = require('chai');

const form = {
  formid: 723874,
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
  professions: [{ profession: 'pit_boss' }, { profession: 'trainee' }],
  messengers: [{ messenger: 'Telegram', info: 'pit_boss' }],
  languageSkills: [
    { language: 'english', languageProficiency: 'basic' },
    { language: 'russian', languageProficiency: 'native' },
  ],
};

describe('GET FORM', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });
  it('200 successfully created form', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/v1/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(form)
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
