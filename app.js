const express = require("express");
const morgan = require("morgan");
const { getPosts } = require("./routes/post");

const app = express();
const port = 8080;

app.use(morgan("dev"));

app.get("/", getPosts);

app.listen(port, () =>
  console.log(`A Node Js API is listening on port: ${port}`)
);
