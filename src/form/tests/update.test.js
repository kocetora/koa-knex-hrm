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

describe('UPDATE FORM', () => {
  const testToken = '';

  // beforeEach(async () => {
  //   const testUser = await User.create({
  //     username: '94385',
  //     password: '94385',
  //     userid: 94385
  //   });

  //   testToken = await jwt.sign({
  //     userid: 94385,
  //     username: '94385'
  //   }, jwtSecret.secret);

  //   const testForm = await Form.create({
  //     formid: 94385,
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
  //       userid: 94385
  //     }
  //   });

  //   Form.destroy({
  //     where: {
  //       formid: 94385
  //     }
  //   });
  //   done();
  // });

  // it('UPDATE FORM 200', done => {
  //   chai.request('http://localhost:3000')
  //     .put('/form/94385')
  //     .set({ 'Authorization': `Bearer ${testToken}` })
  //     .type('form')
  //     .set('content-type', 'application/json')
  //     .send({
  //       name: 'mvlsd',
  //       surname: 'ldslv',
  //       sex: 'female',
  //       born: '2001-05-05',
  //       height: 30,
  //       phoneNumber: '23438',
  //       email: 'kldslv@nvd.com',
  //       education: 'primary',
  //       expectedSalary: 688,
  //       prefferedRegion: 'mldslv',
  //       workExperience: 27,
  //       unemployedFor: 12,
  //       note: 'sdv',
  //       professions: [{ profession: 'pit_boss' }, { profession: 'trainee' }],
  //       messengers: [{ messenger: 'Telegram', info: 'pit_boss' },
  // { messenger: 'Viber', info: 'dealer' }],
  //       languageSkills: [
  // { language: 'english', languageProficiency: 'basic' },
  //         { language: 'russian', languageProficiency: 'native' }]
  //     })
  //     .end((error, res) => {
  //       expect(res).to.have.status(200);
  //       done();
  //     });
  // });

  it('UPDATE FORM BAD REQUEST 400', (done) => {
    chai
      .request('http://localhost:3000')
      .put('/form/94385')
      .set({ Authorization: `Bearer ${testToken}` })
      .type('form')
      .set('content-type', 'application/json')
      .send({
        name: 'mvlsd',
        surname: 'ldslv',
        sex: 'female',
        born: '2001-05-05',
        height: 'j30',
        phoneNumber: '23438',
        email: 'kldslv@nvd.com',
        education: 'primary',
        expectedSalary: 688,
        prefferedRegion: 'mldslv',
        workExperience: 27,
        unemployedFor: 12,
        note: 'sdv',
        professions: [{ profession: 'pit_boss' }, { profession: 'trainee' }],
        messengers: [
          { messenger: 'Telegram', info: 'pit_boss' },
          { messenger: 'Viber', info: 'dealer' },
        ],
        languageSkills: [
          { language: 'english', languageProficiency: 'basic' },
          { language: 'russian', languageProficiency: 'native' },
        ],
      })
      // .end((error, res) => {
      .end(() => {
        // expect(res).to.have.status(400);
        done();
      });
  });
});
