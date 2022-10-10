const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bp = require("body-parser");
const postRoutes = require("./routes/post");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("DB Connected!!");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB Connection error: ${err.message}`);
});

const app = express();
const port = process.env.PORT || 8080;

const myMiddleware = (req, res, next) => {
  console.log("sample middleware applied");
  next();
};

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(myMiddleware);

app.use("/", postRoutes);

app.listen(port, () =>
  console.log(`A Node Js API is listening on port: ${port}`)
);
