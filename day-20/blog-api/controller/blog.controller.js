const BlogPost = require('../models/blog-post');
const winston = require('../utils/logger');

// Controller function to create a new blog post
const createBlogPost = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;

    const newPost = new BlogPost({
      title,
      content,
      author,
    });

    await newPost.save();
    res.status(201).json(newPost);
    winston.info(`Blog post created by ${author}: ${title}`);
  } catch (err) {
    next(err);
  }
};

// Controller function to get all blog posts
const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await BlogPost.find();
    res.status(200).json(blogs);
    winston.info('Fetched all blog posts');
  } catch (err) {
    next(err);
  }
};

// Controller function to get a single blog post by ID
const getBlogById = async (req, res, next) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      const err = new Error('Blog post not found');
      err.statusCode = 404;
      return next(err);
    }
    res.status(200).json(blog);
    winston.info(`Fetched blog post with ID: ${req.params.id}`);
  } catch (err) {
    next(err);
  }
};

module.exports = { createBlogPost, getAllBlogs, getBlogById };
