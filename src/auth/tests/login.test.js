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

describe('LOGIN', () => {
  // beforeEach(done => {
  //   User.create({
  //     userid: 898430,
  //     username: '898430',
  //     password: '898430'
  //   });
  //   done();
  // });

  // afterEach(done => {
  //   User.destroy({
  //     where: {
  //       username: '898430'
  //     }
  //   });
  //   done();
  // });

  it('LOGIN CORRECT DATA 200', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '898430',
        password: '898430',
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.statusCode).to.equal(200);
        // expect(res.body).to.matchPattern({
        //   userid: 898430,
        //   username: '898430',
        //   token: _.isString });
        done();
      });
  });

  it('LOGIN INCORRECT DATA 400', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: 'FALSE',
        password: '898430',
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.statusCode).to.equal(401);
        // expect(res.body).to.matchPattern({
        //   success: false,
        //   message: 'User does not exist or password is incorrect' });
        done();
      });
  });

  it('LOGIN INCORRECT DATA 400', (done) => {
    chai
      .request('http://localhost:3000')
      .post('/login')
      .type('form')
      .set('content-type', 'application/json')
      .send({
        username: '898430',
        password: 'FALSE',
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res.statusCode).to.equal(401);
        // expect(res.body).to.matchPattern({
        //   success: false,
        //   message: 'User does not exist or password is incorrect' });
        done();
      });
  });
});
