const Services = require('../services/index');

const addComment = async(ctx) => {
  try {
    await Services.addComment(ctx.request.body);
    ctx.body = {
      status: true,
      message: 'Comment successfully added'
    }
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
}