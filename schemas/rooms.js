const Joi = require("joi");

const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    category: Joi.string().valid("Tehnologija", "Putovanja", "Sport", "Hobi", "Poklon").required()
});

module.exports = schema;