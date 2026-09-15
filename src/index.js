import dotenv from "dotenv";
import express from "express";
//use improt for type module
//use require for type commonjs
dotenv.config({
  path: "./.env",
});
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
