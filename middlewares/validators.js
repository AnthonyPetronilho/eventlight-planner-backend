const { celebrate, Joi } = require("celebrate");

const validateSignup = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const validateCreateScene = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required().min(2).max(60),
    eventType: Joi.string().required(),
    moment: Joi.string().required(),
    colors: Joi.array().items(Joi.string().required()).required(),
    fixtures: Joi.array().items(Joi.string().required()).required(),
    movement: Joi.string().required(),
    intensity: Joi.string().required(),
    notes: Joi.string().allow("").optional(),
  }),
});

const validateSceneId = celebrate({
  params: Joi.object().keys({
    sceneId: Joi.string().hex().length(24).required(),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateCreateScene,
  validateSceneId,
};
