'use strict';
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router/router');
const PORT = 3000;

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server has been stared on port ${PORT}`);
});

module.exports = app;
