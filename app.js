const express = require("express");
const { getPosts } = require("./routes/post");

const app = express();
const port = 8080;

app.get("/", getPosts);

app.listen(port, () =>
  console.log(`A Node Js API is listening on port: ${port}`)
);
