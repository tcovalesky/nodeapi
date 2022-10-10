const express = require("express");
const { getPosts, getPost, createPost } = require("../controllers/post");
const {
  createPostValidator,
  createPostValidationRules,
} = require("../validator");

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPostValidationRules, createPostValidator, createPost);

module.exports = router;
