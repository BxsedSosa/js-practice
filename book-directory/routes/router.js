const { Database } = require("../databases/db");
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const db = new Database();

router.use(bodyParser.urlencoded({ extended: true }));

db.connect();

router.get("/", async (_, res) => {
  try {
    let books = await db.retrieveAll();
    res.render("index", { books });
  } catch (err) {
    console.error("Error:", err);
  }
});

router.get("/books", (_, res) => {
  res.render("button");
});

router.post("/submit", async (req, res) => {
  let book = db.createBook(req.body.title, req.body.author);
  await db.add(book);
  res.render("button");
});

router.get("/home", (_, res) => {
  res.render("home");
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
