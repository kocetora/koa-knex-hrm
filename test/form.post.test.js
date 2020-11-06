'use strict';
// eslint-disable-next-line
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

const incorrectFormName = {
  name: 'n',
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
  messengers: [
    { messenger: 'Viber', info: 'jsncdkns' },
    { messenger: 'Telegram', info: 'pksjdvsk' },
  ],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

const incorrectFormSurname = {
  name: 'nae',
  surname: 'n',
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
  messengers: [
    { messenger: 'Viber', info: 'jsncdkns' },
    { messenger: 'Telegram', info: 'pldcmwwc' },
  ],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

const incorrectFormHeight = {
  name: 'nae',
  surname: 'name',
  sex: 'male',
  born: '2002-05-05',
  height: 1,
  phoneNumber: '235438',
  email: 'klds4lv@nvd.com',
  education: 'primary',
  expectedSalary: 6885,
  prefferedRegion: 'mldlv',
  workExperience: 26,
  unemployedFor: 11,
  note: 'sdv',
  professions: [{ profession: 'pit_boss' }],
  messengers: [
    { messenger: 'Viber', info: 'jsncdkns' },
    { messenger: 'Telegram', info: 'pverveer' },
  ],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

const incorrectFormEmail = {
  name: 'nae',
  surname: 'name',
  sex: 'male',
  born: '2002-05-05',
  height: 130,
  phoneNumber: '235438',
  email: 'klds4lv.com',
  education: 'primary',
  expectedSalary: 6885,
  prefferedRegion: 'mldlv',
  workExperience: 26,
  unemployedFor: 11,
  note: 'sdv',
  professions: [{ profession: 'pit_boss' }],
  messengers: [
    { messenger: 'Viber', info: 'jsncdkns' },
    { messenger: 'Telegram', info: 'sdkjncds' },
  ],
  languageSkills: [{ language: 'russian', languageProficiency: 'native' }],
};

describe('POST FORM', () => {
  before(done => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });
  it('200 successfully created form', done => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(form)
      .end((error, res) => {
        expect(res.text).equals('Request processed successfully');
        expect(res).to.have.status(200);
        done();
      });
  });
  it('400 bad data form', done => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectFormName)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect name. Should be longer than 2 and shorter then 128'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
  it('400 bad data form', done => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectFormEmail)
      .end((error, res) => {
        expect(res.text).equals('Incorrect email');
        expect(res).to.have.status(400);
        done();
      });
  });
  it('400 bad data form', done => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectFormSurname)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect surname. Should be longer than 2 and shorter then 128'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
  it('400 bad data form', done => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectFormHeight)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect height. Should be bigger than 30 and less then 300'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
});
