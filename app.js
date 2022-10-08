const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const postRoutes = require("./routes/post");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const myMiddleware = (req, res, next) => {
  console.log("sample middleware applied");
  next();
};

app.use(morgan("dev"));
app.use(myMiddleware);

app.use("/", postRoutes);

app.listen(port, () =>
  console.log(`A Node Js API is listening on port: ${port}`)
);
