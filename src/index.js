import dotenv from "dotenv";
// import express from "express";
import app from "./app.js"
//use improt for type module
//use require for type commonjs
dotenv.config({
  path: "../.env",
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port https//localhost:${port}`);
});
