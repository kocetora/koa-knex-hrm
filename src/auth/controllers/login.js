'use strict';

const login = async ctx => {
  try {
    throw new Error('wip');
  } catch (err) {
    ctx.throw(400, err);
  }
};

module.exports = {
  login
};
