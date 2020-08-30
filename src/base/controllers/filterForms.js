const Services = require('../services/index');

const filterForms = async(ctx) => {
  try {
    ctx.body = await Services.filterForms(ctx.request.body);
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
}