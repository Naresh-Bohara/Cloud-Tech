const express = require('express');
const { createBlogPost, getAllBlogs, getBlogById } = require('../controller/blog.controller');
const { validateBlogPost } = require('../validation/blog.validation');

const router = express.Router();

// Route to create a new blog post
router.post('/create', validateBlogPost, createBlogPost);

// Route to get all blog posts
router.get('/', getAllBlogs);

// Route to get a specific blog post by ID
router.get('/:id', getBlogById);

module.exports = router;
