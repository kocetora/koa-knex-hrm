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

describe('Migration testing order by and group by', () => {
  before((done) => {
    knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run())
      .then(()=>fs.unlink(`test/info2.log`, (err) => {
        if (err) {
          console.error(err)
          return
        }
      }))
      .then(() => done())
      .catch(e=>done(e));
  });

  it('it should be successed', (done) => {
    knex
      .select('role', knex.raw('COUNT(id)'))
      .from('users')
      .groupByRaw('role')
      .orderBy('role', 'desc')
      .then(
          function (result) {
            jsonexport(result, function (err, csv) {
              if (err) return console.error(err)
              (async () => {
                await fs.writeFile('test/actual2.csv', csv);
            })();
            })
            compare(2);
            readFile('test/difference2.csv', "utf8").then((difference)=>{
              expect(difference.trim()).equals('');
              done();
            }).catch(e=>done(e))
          }
      ).catch(e=>done(e));
  });
});
