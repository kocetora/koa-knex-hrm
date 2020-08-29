'use strict';
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors());
app.use(bodyParser());
const router = new Router({
  prefix: '/api',
});

const authRouter = require('./src/auth/router');

router.use(authRouter.routes());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server has been stared on port ${PORT}`);
});

module.exports = app;