'use strict';

const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwtSecret = require('../config/jwtConfig');
const knex = require('../db/knex');

module.exports = passport => {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    session: false
  },
  (name, password, done) => {
    try {
      knex('users').where({ username: name }).select()
        .then(user => {
          console.log(user[0]);
          if (!user[0] || !user[0].validPassword(password)) {
            return done(null, false,
              { message: 'User does not exist or password is incorrect' });
          } else {
            return done(null, user);
          }
        });
    } catch (err) {
      done(err);
    }
  }
  ));

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};

const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret.secret
};

passport.use('jwt', new JWTstrategy(opt, (payload, done) => {
  knex('users')
    .where({
      id: payload.userid,
      username: payload.username
    }).select()
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false, { message: 'Unauthorized' });
      }
    });
}));
