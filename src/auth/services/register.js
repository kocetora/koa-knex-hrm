'use strict';
const queries = require('../queries/index');
const crypto = require("crypto");
const argon2 = require('argon2');
const { findUser } = require('./findUser');

const register = async ({ address, email, password }) => 
  Promise.all([
    findUser(email),
    argon2.hash(email, crypto.randomBytes(16)),
    argon2.hash(address, crypto.randomBytes(16)),
    argon2.hash(password, crypto.randomBytes(16))
  ]).then(async ([id, email, address, password])=>{
    if (id != null) {
      const error = new Error('User with this email already exists.');
      error.code = 409;
      throw error;
    } else {
      const user  = {
        address,
        password,
        email,
      };
      users_emails.push(user);
      await queries.addUser(user);
    }
  });

module.exports = {
  register,
};



