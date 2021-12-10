'use strict';
require('dotenv').config()
const queries = require('../queries/index');
const crypto = require("crypto");
const argon2 = require('argon2');
const { findUser, users_emails } = require('./findUser');
const xsalsa20 = require('xsalsa20');

const key = Buffer.from(process.env.SALSA20_KEY, 'utf-8');

const encryptWithSalsa20 = async(data) => {
  const salt = crypto.randomBytes(24);
  const xor = xsalsa20(salt, key);
  const encrypted = Buffer.from(xor.update(Buffer.from(data))).toString('hex');
  const hexSalt = salt.toString('hex');
  return `${hexSalt}$${encrypted}`;
}

const register = async ({ address, email, password }) => 
  Promise.all([
    findUser(email),
    argon2.hash(email, crypto.randomBytes(16)),
    encryptWithSalsa20(address),
    argon2.hash(password, crypto.randomBytes(16))
  ]).then(async ([dbEmail, email, address, password])=>{
    if (dbEmail != null) {
      const error = new Error('User with this email already exists.');
      error.code = 409;
      throw error;
    } else {
      await queries.addUser({
        address,
        password,
        email,
      });
      const [user] = await queries.getUser(email);
      users_emails.push({ email: user.email });
    }
  });

module.exports = {
  register,
};



