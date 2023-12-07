const express = require("express");
const { createBlogController, getBlogController } = require("../controller/blog.controller");
const { auth } = require("../middleware/auth.middleware");
const blogRouter = express.Router();

blogRouter.post("/api/blog/create",auth, createBlogController);
blogRouter.get("/api/blog",auth, getBlogController);

module.exports = {
  blogRouter,
};
