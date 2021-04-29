'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiMatchPattern = require('chai-match-pattern');
chai.use(chaiHttp);
chai.use(chaiMatchPattern);
const knex = require('../src/db/knex');
const { expect } = require('chai');
const jsonexport = require('jsonexport')
const fs = require('fs')
const { compare } = require('./helper');
const util = require('util');
const readFile = util.promisify(fs.readFile);

describe('Migration testing another query', () => {
  before((done) => {
    knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
      .then(()=>fs.unlink(`test/info1.log`, (err) => {
        if (err) {
          console.error(err)
          return
        }
      }))
      .then(() => done())
      .catch(e=>done(e));
  });

  it('it should be successed', (done) => {
    knex('forms')
      .select() 
      .then(
          function (result) {
            jsonexport(result, function (err, csv) {
              if (err) return console.error(err)
              (async () => {
                await fs.writeFile('test/actual2.csv', csv);
            })();
            })
            compare(1);
            readFile('test/difference1.csv', "utf8").then((difference)=>{
              expect(difference.trim()).equals('');
              done();
            }).catch(e=>done(e))
          }
      ).catch(e=>done(e))
  });
});


