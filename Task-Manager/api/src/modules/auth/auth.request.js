import Joi from "joi";

const userRegisterDTO = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': 'Name must be a string.',
            'string.min': 'Name must be at least 2 characters long.',
            'string.max': 'Name must not exceed 50 characters.',
            'any.required': 'Name is required.',
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.base': 'Email must be a string.',
            'string.email': 'Email must be a valid email address.',
            'any.required': 'Email is required.',
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.base': 'Password must be a string.',
            'string.min': 'Password must be at least 6 characters long.',
            'any.required': 'Password is required.',
        }),

    role: Joi.string()
        .valid('admin', 'customer', 'seller')
        .default('customer')
        .messages({
            'string.base': 'Role must be a string.',
            'any.only': 'Role must be one of the following: admin, customer, seller.',
        })
});

 
// Login DTO schema
const loginDTO = Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': 'Please provide a valid email address.',
        'string.empty': 'Email is required.',
      }),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': 'Password is required.',
      }),
  });

export {userRegisterDTO, loginDTO}
