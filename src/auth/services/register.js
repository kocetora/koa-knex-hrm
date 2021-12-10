'use strict';
require('dotenv').config()
const queries = require('../queries/index');
const crypto = require("crypto");
const argon2 = require('argon2');
const { findUser } = require('./findUser');
const xsalsa20 = require('xsalsa20');

const key = Buffer.from(process.env.SALSA20_KEY, 'utf-8');

const encryptWithSalsa20 = async(data) => {
  const salt = crypto.randomBytes(24);
  const xor = xsalsa20(salt, key)
  const encrypted = Buffer.from(xor.update(data)).toString('hex');
  const saltHex = salt.toString('hex')
  return `${saltHex}$${encrypted}`;
}

const register = async ({ address, email, password }) => 
  Promise.all([
    findUser(email),
    argon2.hash(email, crypto.randomBytes(16)),
    encryptWithSalsa20(address),
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



