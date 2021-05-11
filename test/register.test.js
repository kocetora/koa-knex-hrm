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

describe('REGISTER', () => {
  beforeAll((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '12387324',
        password: '12387324',
      })
      .end((error, res) => {
        expect(res.text).equals(
          JSON.stringify({
            success: true,
            message: 'Request processed successfully',
          })
        );
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('400 shorter length username', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1',
        password: '1238732',
      })
      .end((error, res) => {
        expect(res.text).equals(
          'Wrong username. Should be longer than 2 and shorter then 128'
        );
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('400 Bigger length password', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1238732',
        password: '1'.repeat(129),
      })
      .end((error, res) => {
        expect(res.text).equals(
          'Wrong password. Should be longer than 6 and shorter then 128'
        );
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('409 Username is taken', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: 'login',
        password: 'password',
      })
      .end((error, res) => {
        expect(res.text).equals('Username is already taken');
        expect(res.statusCode).to.equal(409);
        done();
      });
  });

  afterAll(() => {
    app.stop();
  });
});
