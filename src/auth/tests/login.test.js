'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiHttp);
chai.use(chaiMatchPattern);

describe('LOGIN', () => {
  it('LOGIN CORRECT DATA 200', done => {
    chai
      .request('http://localhost:3000')
      .post('/login')
      .type('form')
      .set('content-type', 'application/json')
      .send()
      .end(() => {
        done();
      });
  });
});
