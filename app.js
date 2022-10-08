const express = require("express");
const morgan = require("morgan");
const { getPosts } = require("./routes/post");

const app = express();
const port = 8080;

const myMiddleware = (req, res, next) => {
  console.log("sample middleware applied");
  next();
};

app.use(morgan("dev"));
app.use(myMiddleware);

app.get("/", getPosts);

app.listen(port, () =>
  console.log(`A Node Js API is listening on port: ${port}`)
);
