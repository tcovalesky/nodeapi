const express = require("express");
const { getPosts, createPost } = require("../controllers/post");
const {
  createPostValidator,
  createPostValidationRules,
} = require("../validator");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPostValidationRules, createPostValidator, createPost);

module.exports = router;
