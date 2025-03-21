const mongoose = require('mongoose');

// Define the schema for the blog post
const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
