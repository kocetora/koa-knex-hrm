'use strict';
const Koa = require('koa');
const passport = require('koa-passport');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 4000;

const app = new Koa();
app.use(cors());
app.use(bodyParser({ jsonLimit: '50mb' }));
const router = new Router();

const authRouter = require('./src/auth/router');

router.use(authRouter.routes());
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(PORT, () => console.log(`🌍 Server listening on port ${PORT}`));

const stop = () => {
  server.close();
};

module.exports = server;
module.exports.stop = stop;
