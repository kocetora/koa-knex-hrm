'use strict';

exports.seed = function(knex) {
  return knex('comments').del()
    .then(() => knex('comments').insert([
      { comment: 'rowValue1', formid: 1, userid: 1 },
      { comment: 'rowValue2', formid: 2, userid: 2 },
      { comment: 'rowValue3', formid: 2, userid: 3 }
    ]));
};
