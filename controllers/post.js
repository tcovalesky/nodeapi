const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res) =>
  res.json({
    posts: [{ title: "First post" }, { title: "Second post" }],
  });

exports.createPost = (req, res) => {
  const errors = validationResult(req);
  console.log(errors.errors);
  const post = new Post(req.body);
  post.save().then((result) => res.status(201).json({ post: result }));
};
