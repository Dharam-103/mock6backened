const { BlogModel } = require("../Models/blog.model");

const createBlogController = async (req, res) => {
  try {
    const blog = new BlogModel(req.body);
    await blog.save();
    res.status(200).send({ msg: "New blog is created successfully", blog });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Error in creating blog" });
  }
};

const getBlogController = async (req, res) => {
  try {
    const blog = await BlogModel.find({ authorId: req.body.authorId });
    res.send({ msg: "List of all blog", blog });
  } catch (err) {
    console.log(err);
    res.send({ msg: "Error in getting all the blog" });
  }
};

module.exports = {
  createBlogController,
  getBlogController,
};
