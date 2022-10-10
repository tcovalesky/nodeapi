const Post = require("../models/post");

exports.getPosts = (req, res) => {
  Post.find()
    .select("_id title body")
    .then((posts) => res.json({ posts }))
    .catch((err) => console.log(err));
};

exports.getPost = (req, res) => {
  Post.findById(req.params.id)
    .select("_id title body")
    .then((post) => res.json({ post }))
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  post.save().then((post) => res.status(201).json({ post }));
};
