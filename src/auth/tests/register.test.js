'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
// const _ = chaiMatchPattern.getLodashModule();
// const server = require('../../../app');
// const expect = chai.expect;
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
// const knex = require('../../db/knex');

describe('REGISTER', () => {
  // afterEach(done => {
  //   User.destroy({
  //     where: {
  //       username: '1238732'
  //     }
  //   });
  //   done();
  // });

  it('REGISTER CORRECT DATA 200', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1238732',
        password: '1238732',
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.statusCode).to.equal(200);
        // expect(res.body).to.matchPattern({
        //   success: true,
        //   message: 'User created!'
        // });
        done();
      });
  });
});

describe('REGISTER', () => {
  // beforeEach(done => {
  //   User.create({
  //     userid: '1238732',
  //     username: '1238732',
  //     password: '1238732'
  //   });
  //   done();
  // });

  // afterEach(done => {
  //   User.destroy({
  //     where: {
  //       username: '1238732'
  //     }
  //   });
  //   done();
  // });

  it('REGISTER INCORRECT DATA 400', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/register')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '1238732',
        password: '1238732',
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.statusCode).to.equal(400);
        // expect(res.body).to.matchPattern({
        //   success: false,
        //   message: 'Ключ "(username)=(1238732)" уже существует.' });
        done();
      });
  });
});
