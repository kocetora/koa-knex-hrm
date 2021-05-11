'use strict';
const Koa = require('koa');
const passport = require('koa-passport');
const Router = require('koa-router');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const PORT = process.env.PORT || 3000;

const app = new Koa();
app.use(cors());
app.use(bodyParser({ jsonLimit: '50mb' }));
const router = new Router({
  prefix: '/v1',
});

const authRouter = require('./src/auth/router');
const formRouter = require('./src/form/router');
const baseRouter = require('./src/base/router');

router.use(authRouter.routes());
router.use(formRouter.routes());
router.use(baseRouter.routes());
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(router.allowedMethods());

let server = app.listen(PORT, () => console.log(`🌍 Server listening on port ${PORT}`))

// module.exports = server;

// app.listen(PORT, () => {
//   console.log(`Server has been stared on port ${PORT}`);
// });

// module.exports = app;

// let server = app.listen(port, () => {
//   console.log('App listening on port %s, in environment %s!', port, _.toUpper(process.env.NODE_ENV || ''));
// });

function stop() {
  server.close();
}

module.exports = server;
module.exports.stop = stop;