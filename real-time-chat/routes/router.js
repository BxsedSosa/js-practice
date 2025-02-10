const express = require("express");
// const { Server } = require("socketio");

const router = express.Router();

function main() {
  router.get("/", (req, res) => {
    res.render("index");
  });

  router.get("/socket", (req, res) => {
    res.render("socketio");
  });
}

main();

module.exports = router;
