const express = require("express");
const router = express.Router();

function main() {
  router.get("/", (req, res) => {
    res.render("index");
  });
}

main();

module.exports = router;
