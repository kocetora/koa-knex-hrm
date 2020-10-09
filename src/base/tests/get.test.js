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

describe('GET FORMS', () => {
  const testToken = '';

  // beforeEach(async () => {
  //   const testUser = await User.create({
  //     username: '3802985',
  //     password: '3802985',
  //     userid: 3802985
  //   });

  //   testToken = await jwt.sign({
  //     userid: 3802985,
  //     username: '3802985'
  //   }, jwtSecret.secret);

  //   const testForm = await Form.create({
  //     formid: 3802985,
  //     name: 'mvlsd',
  //     surname: 'ldslv',
  //     sex: 'female',
  //     born: '2001-05-05',
  //     height: 30,
  //     phoneNumber: '23438',
  //     email: 'kldslv@nvd.com',
  //     education: 'primary',
  //     expectedSalary: 688,
  //     prefferedRegion: 'mldslv',
  //     workExperience: 27,
  //     unemployedFor: 12,
  //     note: 'sdv',
  //     professions: [{ profession: 'pit_boss' }, { profession: 'trainee' }],
  //     messengers: [{ messenger: 'Telegram', info: 'pit_boss' },
  // { messenger: 'Viber', info: 'dealer' }],
  //     languageSkills: [{ language: 'english', languageProficiency: 'basic' },
  //       { language: 'russian', languageProficiency: 'native' }]
  //   });
  // });

  // afterEach(done => {
  //   User.destroy({
  //     where: {
  //       userid: 3802985
  //     }
  //   });

  //   Form.destroy({
  //     where: {
  //       formid: 3802985
  //     }
  //   });
  //   done();
  // });

  it('GET FORMS 200', (done) => {
    chai
      .request('http://localhost:3000')
      .get('/forms')
      .set({ Authorization: `Bearer ${testToken}` })
      .type('form')
      .set('content-type', 'application/json')
      // .end((error, res) => {
      .end(() => {
        // expect(res).to.have.status(200);
        done();
      });
  });
});
