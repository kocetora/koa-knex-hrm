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

describe('REGISTER', () => {
  before((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/v1/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '12387324',
        password: '12387324',
      })
      .end((error, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.matchPattern({
          success: true,
          message: 'User successfully registered',
        });
        done();
      });
  });

  it('400 shorter length username', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/v1/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1',
        password: '1238732',
      })
      .end((error, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('400 Bigger length password', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/v1/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1238732',
        password: '1'.repeat(129),
      })
      .end((error, res) => {
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('409 Username is taken', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/v1/auth/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: 'login',
        password: 'password',
      })
      .end((error, res) => {
        expect(res.statusCode).to.equal(409);
        expect(res.body).to.matchPattern({
          success: false,
          message: 'Username is already taken',
        });
        done();
      });
  });
});
