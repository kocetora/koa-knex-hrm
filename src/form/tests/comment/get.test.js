'use strict';
// eslint-disable-next-line
const app = require('../../../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
const knex = require('../../../db/knex');
const { expect } = require('chai');

describe('GET COMMENT', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });
  it('200 successfully got comment', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .get('/form/2147483646/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        console.log(res.message);
        expect(res).to.have.status(200);
        done();
      });
  });
  it('404 form not found', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .get('/form/78423/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end((error, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
