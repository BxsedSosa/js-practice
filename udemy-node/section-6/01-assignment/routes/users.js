const express = require("express");

const router = express.Router();

const home = require("./home.js");

router.get("/users", (req, res) => {
  res.render("users", {
    pageTitle: "Users",
    users: home.users,
  });
});

module.exports = router;
