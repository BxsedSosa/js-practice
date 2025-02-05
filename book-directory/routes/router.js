const { Database } = require("../databases/db");
const express = require("express");
const router = express.Router();

const db = new Database();

db.connect();

router.get("/", (_, res) => {
  res.send("hello");
});

router.get("/send-book", async () => {
  try {
    let book = db.createBook("testing", "another test");
    db.add(book);
  } catch (err) {
    console.error("Error:", err);
  }
});

module.exports = router;
