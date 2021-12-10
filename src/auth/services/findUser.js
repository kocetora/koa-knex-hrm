'use strict';
const queries = require('../queries/index');
const argon2 = require('argon2');
const users_emails = [];

const findUser = async (email) => {
    if (users_emails.length == 0) {
      const emails = await queries.getUserEmails();
      emails.forEach(el => users_emails.push(el))
    }
    if (users_emails.length > 0) {
      const users = await Promise.all(users_emails.map(async (user) => argon2.verify(user.email, email)));
      const id = users.findIndex(el => el)
      return id > -1 ? users_emails[id].email : null;
    }
    return null;
}

module.exports = {
  findUser, users_emails
};