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
const auth = require('../src/middleware/auth');

const user = {
  id: 2147483645,
  username: 'login1',
  role: 'user',
  password: 'password',
};

const token = auth.getToken(user.id, user.username, user.role);

describe('GET COMMENT', () => {
  beforeAll((done) => {
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
      .set({
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      })
      .send()
      .end((error, res) => {
        expect(res.body[0]).to.have.all.keys(
          'id',
          'comment',
          'userid',
          'formid',
          'created_at'
        );
        expect(res).to.have.status(200);
        done();
      });
  });
  it('404 form not found', (done) => {
    chai
      .request('http://localhost:3000/v1')
      .get('/form/78423/comment')
      .type('form')
      .set({
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      })
      .send()
      .end((error, res) => {
        expect(res.text).equals("Form with this id doesn't exist");
        expect(res).to.have.status(404);
        done();
      });
  });

  afterAll(() => {
    app.stop();
  });
});
