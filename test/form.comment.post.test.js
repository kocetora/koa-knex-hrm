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

const comment = {
  userid: 2147483646,
  formid: 2147483646,
  comment: 'hooray!',
};

const incorrectComment = {
  userid: 2147483646,
  formid: 2147483646,
  comment: 'h'.repeat(129),
};

const incorrectUserComment = {
  userid: 0,
  formid: 2147483646,
  comment: 'hkd',
};

const unexistComment = {
  userid: 2843299,
  formid: 2147483646,
  comment: 'hkd',
};

describe('POST COMMENT', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });
  it('200 successfully posted comment', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2147483646/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(comment)
      .end((error, res) => {
        expect(res.text).equals('Request processed successfully');
        expect(res).to.have.status(200);
        done();
      });
  });
  it('404 not found form', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2843299/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(comment)
      .end((error, res) => {
        expect(res.text).equals("Form with this id doesn't exist");
        expect(res).to.have.status(404);
        done();
      });
  });
  it('404 not found user', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2147483646/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(unexistComment)
      .end((error, res) => {
        expect(res.text).equals("User with this id doesn't exist");
        expect(res).to.have.status(404);
        done();
      });
  });
  it('400 incorect user id', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2147483646/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectUserComment)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect userid. Should be bigger than 1 and less then 2147483647'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
  it('400 incorrect comment', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2147483646/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(incorrectComment)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect comment. Should be longer than 1 and shorter then 128'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
  it('400 incorrect formid', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/form/2843299u/comment')
      .type('form')
      .set('content-type', 'application/json')
      .send(comment)
      .end((error, res) => {
        expect(res.text).equals(
          'Incorrect formid. Should be bigger than 1 and less then 2147483647'
        );
        expect(res).to.have.status(400);
        done();
      });
  });
});
