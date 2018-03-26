const Joi = require('joi');

module.exports = {
  userCreateSchema: Joi.object()
  .options({ abortEarly: false })
  .keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(5)
  }),
  userUpdateSchema: Joi.object()
  .options({ abortEarly: false })
  .keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    // le password est optionel
    password: Joi.string().min(5)
  })
}
