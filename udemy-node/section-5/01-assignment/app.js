const express = require("express");

const app = express();

app.use("/users", (req, res) => {
  res.send("<h1>User page</h1><ul><li>User 1</li></ul>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home page</h1>");
  next();
});

app.use((req, res) => {
  console.log("entered home page ");
});

app.listen(3000);
