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

describe('GET FORM', () => {
  before(done => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', done => {
    chai
      .request('http://localhost:3000/v1')
      .get('/form/2147483646')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        expect(res.body.messengers[0]).to.have.all.keys('messenger', 'info');
        expect(res.body.professions[0]).to.have.all.keys('profession');
        expect(res.body.languageSkills[0]).to.have.all.keys(
          'language',
          'languageProficiency'
        );
        expect(res.body).to.have.all.keys(
          'id',
          'name',
          'surname',
          'born',
          'sex',
          'height',
          'phoneNumber',
          'email',
          'prefferedRegion',
          'education',
          'expectedSalary',
          'workExperience',
          'unemployedFor',
          'note',
          'created_at',
          'updated_at',
          'professions',
          'messengers',
          'languageSkills'
        );
        expect(res).to.have.status(200);
        done();
      });
  });

  it('404 form not found', done => {
    chai
      .request('http://localhost:3000/v1')
      .get('/form/4383991')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        expect(res.text).equals('Form with this id doesn\'t exist');
        expect(res).to.have.status(404);
        done();
      });
  });
});
