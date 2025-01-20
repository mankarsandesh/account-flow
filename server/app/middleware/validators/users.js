const { body } = require("express-validator");
const Joi = require("joi");

function validateUsers(user) {
  const JoiSchema = Joi.object({
    full_name: Joi.string().min(5).max(30).required(),
    user_email: Joi.string().email().min(5).max(50).required(),
    user_type: Joi.string().required(),
    password: Joi.string().required(),
  }).options({ abortEarly: false });
  return JoiSchema.validate(user);
}

const validateAuthUser = (user) => {
  const JoiSchema = Joi.object({
    user_email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).options({ abortEarly: false });
  return JoiSchema.validate(user);
};

module.exports = {
  validateUsers,
  validateAuthUser,
};
