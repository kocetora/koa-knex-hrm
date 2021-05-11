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

const user = {
  id: 2147483645,
  username: 'login1',
  role: 'user',
  password: 'password',
};

describe('LOGIN', () => {
  beforeAll((done) => {
    knex.migrate
      .latest()
      .then(() => knex.seed.run())
      .then(() => done());
  });

  it('200 SUCCESS', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: user.username,
        password: user.password,
      })
      .end((error, res) => {
        expect(res.text).equals(
          JSON.stringify({
            userid: 2147483645,
            username: 'login1',
            role: 'user',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxNDc0ODM2NDUsInVzZXJuYW1lIjoibG9naW4xIiwicm9sZSI6InVzZXIifQ.5YEMNQgqRbOO66ra_I9jlTRBATnIpZRiidxX7iAkqXw',
          })
        );
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it('username should be', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '',
        password: user.password,
      })
      .end((error, res) => {
        expect(res.text).equals(
          'Wrong username. Should be longer than 2 and shorter then 128'
        );
        expect(res.statusCode).to.equal(400);
        done();
      });
  });

  it('password should be', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .post('/auth/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: user.username,
        password: '',
      })
      .end((error, res) => {
        expect(res.text).equals(
          'Wrong password. Should be longer than 6 and shorter then 128'
        );
        expect(res.statusCode).to.equal(400);
        done();
      });
  });
});
