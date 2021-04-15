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

describe('POST BASE', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/base/public')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        console.log(res.body);
        expect(res.body[0].messengers[0]).to.have.all.keys('messenger', 'info');
        expect(res.body[0].professions[0]).to.have.all.keys('profession');
        expect(res.body[0].languageSkills[0]).to.have.all.keys(
          'language',
          'languageProficiency'
        );
        expect(res.body[0]).to.have.all.keys(
          'id',
          'images',
          'isPublic',
          'name',
          'surname',
          'middlename',
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
});
