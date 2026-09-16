import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome home");
});
app.get("/about", (req, res) => {
  res.send("welcome about section");
});

export default app;
