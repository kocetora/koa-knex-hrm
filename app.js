'use strict';
const Koa = require('koa');
const https = require('https');
const fs = require('fs');
const passport = require('koa-passport');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 4000;

const app = new Koa();

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

app.use(cors());
app.use(bodyParser({ jsonLimit: '50mb' }));
const router = new Router();

const authRouter = require('./src/auth/router');

router.use(authRouter.routes());
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(router.allowedMethods());

const server = https.createServer(options, app.callback()).listen(PORT, () => console.log(`🌍 Server listening on port ${PORT}`));

const stop = () => {
  server.close();
};

module.exports = server;
module.exports.stop = stop;
