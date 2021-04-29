const fs = require('fs')
const log4js = require("log4js");
const util = require('util');
const readFile = util.promisify(fs.readFile);

const compare = (id) => {
    log4js.configure({
        appenders: { data: { type: "file", filename: `test/info${id}.log` } },
        categories: { default: { appenders: ["data"], level: "info" } }
      });
    const logger = log4js.getLogger("data");

    const expectedCsvStr = fs.readFileSync('test/expected' + id + '.csv', "utf8");
    const actualCsvStr = fs.readFileSync('test/actual' + id + '.csv', "utf8");
    const actual = csvToArray(actualCsvStr);
    const difference = [];
    const expected = csvToArray(expectedCsvStr);
  
    for (let i = 0; i < expected.length; i++) {
      difference[i] = actual[i].filter(el => !expected[i].includes(el))
      logger.info(`In line ${i} matched ${expected[i].length - difference[i].length}, mismatched ${difference[i].length}`);
      for (let j = 0; j < expected[i].length; j++) {
        if(expected[i][j] !== actual[i][j]){
          logger.error(`In line ${i} position ${j} expected ${expected[i][j]} but actual ${actual[i][j]}`)
        }
      }
    }
  
    fs.writeFileSync('test/difference' + id + '.csv', difference.join("\n"))
  }
  
  function csvToArray(csv) {
    const rows = csv.split("\n");
  
    return rows.map(function (row) {
      return row.split(",");
    });
  };

module.exports = {
  compare,
};