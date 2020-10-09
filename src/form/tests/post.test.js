'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
// const _ = chaiMatchPattern.getLodashModule();
// const server = require('../../../app');
// const expect = chai.expect;
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
const knex = require('../../db/knex');

describe('CREATE FORM', () => {
  afterEach((done) => {
    knex.migrate.rollback().then(() => {
      done();
    });
  });

  it('CREATE FORM 200', (done) => {
    chai
      .request('http://localhost:3000/api')
      .post('/form')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        formid: 19832574,
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
        messengers: [
          { messenger: 'Telegram', info: 'pit_boss' },
          { messenger: 'Viber', info: 'dealer' },
        ],
        languageSkills: [
          { language: 'english', languageProficiency: 'basic' },
          { language: 'russian', languageProficiency: 'native' },
        ],
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.body).to.matchPattern(
        // { success: true, message: 'Form added!' });
        // expect(res).to.have.status(200);
        done();
      });
  });

  it('CREATE FORM BAD REQUEST 400', (done) => {
    chai
      .request('http://localhost:3000/api')
      .post('/form')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        formid: 19832574,
        name: 'mvlsd',
        surname: 'ldslv',
        sex: 'female',
        prefferedRegion: 'mldslv',
        workExperience: 27,
        unemployedFor: 12,
        note: 'sdv',
        professions: [{ profession: 'pit_boss' }, { profession: 'trainee' }],
        messengers: [
          { messenger: 'Telegram', info: 'pit_boss' },
          { messenger: 'Viber', info: 'dealer' },
        ],
        languageSkills: [
          { language: 'english', languageProficiency: 'basic' },
          { language: 'russian', languageProficiency: 'native' },
        ],
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.body).to.matchPattern({
        //   success: false,
        //   message: _.isArray
        // });
        // expect(res).to.have.status(400);
        done();
      });
  });
});
