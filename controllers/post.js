const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select("_id title body")
    .then((posts) => res.json({ posts }))
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((post) => res.status(201).json({ post }));
};
