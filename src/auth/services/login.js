'use strict';
require('dotenv').config();
const queries = require('../queries/index');
const auth = require('../../middleware/auth');
const argon = require('argon2');
const { findUser } = require('./findUser');
const xsalsa20 = require('xsalsa20');

const key = Buffer.from(process.env.SALSA20_KEY, 'utf-8');

const decryptWithSalsa20 = (data) => {
  const [saltHex, encrypted] = data.split('$');
  const xor = xsalsa20(Buffer.from(saltHex, 'hex'), Buffer.from(key, 'utf-8'));
  return Buffer.from(xor.update(Buffer.from(encrypted, 'hex'))).toString('utf-8');
};

const login = async ({ email, password }) => {
  const dbEmail = await findUser(email);
  if (dbEmail !== null) {
    const [user] = await queries.getUser(dbEmail);
    const passwordFromHash = await argon.verify(user.password, password);
    if (passwordFromHash) {
      return {
        userid: user.id,
        address: await decryptWithSalsa20(user.address),
        email,
        token: auth.getToken(user.id, email)
      };
    } else {
      const error = new Error('email or password is incorrect');
      error.code = 401;
      throw error;
    }
  } else {
    const error = new Error("User with this email doesn't exist");
    error.code = 404;
    throw error;
  }
};

module.exports = {
  login
};
