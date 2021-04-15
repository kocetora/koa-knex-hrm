'use strict';
/* eslint-disable */
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
const knex = require('../src/db/knex');
const { expect } = require('chai');

const form = {
  formid: 723874,
  name: 'name',
  surname: 'surname',
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
  professions: [{ profession: 'pit_boss' }],
  messengers: [{ messenger: 'Telegram', info: 'pit_boss' }],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

const incorrectForm = {
  formid: 723874,
  name: 'nae',
  surname: 'name',
  sex: 'male',
  born: '2002-05-05',
  height: 130,
  phoneNumber: '235438',
  email: 'klds4lv@nvd.com',
  education: 'primary',
  expectedSalary: 6885,
  prefferedRegion: 'mldlv',
  workExperience: 26,
  unemployedFor: 11,
  note: 'sdv',
  professions: [{ profession: 'pit_boss' }],
  messengers: [{ messenger: 'Tele', info: 'kdnsc' }],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

describe('UPDATE FORM', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });
  it('200 successfully updated form', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .put('/form/2147483646')
      .type('form')
      .set('content-type', 'application/json')
      .send(form)
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('404 not found form', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .put('/form/9432844')
      .type('form')
      .set('content-type', 'application/json')
      .send(form)
      .end((error, res) => {
        expect(res.text).equals("Form with this id doesn't exist");
        expect(res).to.have.status(404);
        done();
      });
  });
  it('400 bad data form', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .put('/form/9432844')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectForm)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect messenger. May be Telegram, Viber or WhatsApp only'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
});
