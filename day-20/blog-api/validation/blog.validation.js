const Joi = require('joi');

// Define schema for blog post validation
const blogPostSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
  author: Joi.string().min(3).max(50).required(),
});

// Function to validate blog post data
function validateBlogPost(req, res, next) {
  const { error } = blogPostSchema.validate(req.body);
  if (error) {
    const err = new Error(`Validation Error: ${error.details[0].message}`);
    err.statusCode = 400;
    return next(err);  // Pass the error to the global error handler
  }
  next();
}

module.exports = { validateBlogPost };
