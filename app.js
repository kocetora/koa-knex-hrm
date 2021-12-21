'use strict';
const Koa = require('koa');
const http = require('http');
const https = require('https');
const fs = require('fs');
const passport = require('koa-passport');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 4000;
const HTTP_PORT = process.env.HTTP_PORT || 4001;

const app = new Koa();

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
  ca: fs.readFileSync('localhost-ca.pem')
};

app.use(cors());
app.use(bodyParser({ jsonLimit: '50mb' }));
const router = new Router();

const authRouter = require('./src/auth/router');

router.use(async (ctx, next) => {
  if (ctx.protocol === 'http') {
    ctx.status = 301;
    return ctx.redirect(`https://${HOSTNAME}:${PORT}${ctx.url}`);
  }
  await next();
});
router.get('/', (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    message: 'Reached server'
  };
});
router.use(authRouter.routes());
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(router.allowedMethods());

const server = https.createServer(options, app.callback()).listen(PORT, HOSTNAME);
const httpServer = http.createServer(app.callback()).listen(HTTP_PORT, HOSTNAME);

const stop = () => {
  server.close();
  httpServer.close();
};

module.exports = server;
module.exports.stop = stop;
