'use strict';
const Koa = require('koa');
const passport = require('koa-passport');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const router = require('./router/router');
const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors());
app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session());
require('./config/jwtStrategy')(passport);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server has been stared on port ${PORT}`);
});

module.exports = app;
