const Joi = require("joi");

const createTodoDTO = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().optional(),
    status: Joi.string().valid("pending", "completed").optional()
})

module.exports = {createTodoDTO}