const Services = require('../services/index');

const addForm = async(ctx) => {
  try {
    await Services.addForm(ctx.request.body);
    ctx.body = {
      status: true,
      message: 'Form successfully added'
    }
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
}