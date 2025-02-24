const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.render("home", {
    pageTitle: "Home",
  });
});

router.post("/", (req, res) => {
  users.push({ name: req.body.username });
  console.log(users);
  res.redirect("/");
});

module.exports = {
  router: router,
  users: users,
};
