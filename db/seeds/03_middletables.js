'use strict';

exports.seed = function(knex) {
  return knex('forms_messengers').del()
        .then(() => knex('forms_messengers').insert([
          { messengerid: 1, formid: 1 },
          { messengerid: 2, formid: 2 },
          { messengerid: 3, formid: 2 },
          { messengerid: 4, formid: 2 },
          { messengerid: 5, formid: 3 }
        ])
      ).then(
      knex('forms_languageSkills').del()
        .then(() => knex('forms_languageSkills').insert([
          { languageid: 1, formid: 1 },
          { languageid: 2, formid: 1 },
          { languageid: 3, formid: 2 },
        ]))
    ).then(
      knex('forms_professions').del()
        .then(() => knex('forms_professions').insert([
          { professionid: 3, formid: 1 },
          { professionid: 7, formid: 2 },
          { professionid: 5, formid: 2 },
        ]))
    );
};



