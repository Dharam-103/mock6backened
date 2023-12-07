const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  authorId: {
    type: mongoose.ObjectId,
    ref:"user"
  },
  username: {
    type: String,
  },
  Title: {
    type: String,
  },
  Content: {
    type: String,
  },
  Category: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = mongoose.model("blog", blogSchema);

module.exports = {
  BlogModel,
};
