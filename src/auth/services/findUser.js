'use strict';
const queries = require('../queries/index');
const argon2 = require('argon2');
const usersEmails = [];

const findUser = async (email) => {
  if (usersEmails.length === 0) {
    const emails = await queries.getUserEmails();
    emails.forEach((el) => usersEmails.push(el));
  }
  if (usersEmails.length > 0) {
    const users = await Promise.all(
      usersEmails.map(async (user) => argon2.verify(user.email, email))
    );
    const id = users.findIndex((el) => el);
    return id > -1 ? usersEmails[id].email : null;
  }
  return null;
};

module.exports = {
  findUser,
  usersEmails
};
