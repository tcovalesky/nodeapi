const { check, validationResult } = require("express-validator");

exports.createPostValidationRules = [
  check("title", "Write a title").notEmpty(),
  check("title", "Title must be between 4 and 150 characters").isLength({
    min: 4,
    max: 150,
  }),

  check("body", "Write a body").notEmpty(),
  check("body", "Body must be between 4 and 2000 characters").isLength({
    min: 4,
    max: 2000,
  }),
];

exports.createPostValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.errors.map((error) => error.msg)[0];

    return res.status(400).json({ error: firstError });
  }

  next();
};
