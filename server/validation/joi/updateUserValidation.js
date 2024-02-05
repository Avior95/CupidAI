const Joi = require("joi");

const updateSchema = Joi.object({
  name: Joi.object()
    .keys({
      firstName: Joi.string().min(2).max(256).required(),
      lastName: Joi.string().min(2).max(256).required(),
    })
    .required(),
  gender: Joi.string().min(2).max(40).required(),
  description: Joi.string().min(2).max(40).required(),

  email: Joi.string()
    .regex(
      new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    )
    .required(),
  password: Joi.string()
    .regex(
      new RegExp(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
      )
    )
    .required(),
  image: Joi.object().keys({
    url: Joi.string().regex(
      new RegExp(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
      )
    ),
    alt: Joi.string().min(2).max(256).required(),
  }),
});

const validateUpdateSchema = (userInput) =>
  updateSchema.validateAsync(userInput);

module.exports = {
  validateUpdateSchema,
};
