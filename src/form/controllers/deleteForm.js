const Services = require('../services/index');

const deleteForm = async(ctx) => {
  try {
    await Services.deleteForm(ctx.request.body);
    ctx.body = {
      status: true,
      message: 'Form successfully deleted'
    }
    return ctx;
  } catch (error) {
    return ctx.throw(400, error);
  }
}