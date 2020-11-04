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

describe('GET FORM', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', (done) => {
    chai
      .request('http://localhost:3000')
      .get('/v1/form/2147483646')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('404 form not found', (done) => {
    chai
      .request('http://localhost:3000')
      .get('/v1/form/4383991')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
