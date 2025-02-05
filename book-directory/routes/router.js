const { Database } = require("../databases/db");
const Book = require("../models/books");
const express = require("express");

const router = express.Router();
const db = new Database();

db.connect();

router.get("/", async (_, res) => {
  try {
    let books = await Book.find();
    res.render("index", { books });
  } catch (err) {
    console.error("Error:", err);
  }
});

router.get("/send-book", async () => {
  try {
    let book = db.createBook("testing", "another test");
    db.add(book);
  } catch (err) {
    console.error("Error:", err);
  }
});

router.get("/get-book", async () => {
  try {
    db.retrieve();
  } catch (err) {
    console.error("Error:", err);
  }
});

module.exports = router;
