const Services = require('../services/index');

const getComment = async(ctx) => {
  try {
    ctx.body = await Services.getComment(ctx.request.body);
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
}