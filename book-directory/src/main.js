const mongoose = require("mongoose");
const credentials = require("../config/info.json");
const Book = require("../models/books");

const URI = `mongodb+srv://${credentials.user}:${credentials.pass}@book-directory.4lplp.mongodb.net/?retryWrites=true&w=majority&appName=book-directory`;

async function main() {
  const express = require("express");
  const app = express();
  const port = 3000;
  await mongoose.connect(URI);

  app.get("/", (req, res) => {
    res.render("../views/home.ejs");
  });

  app.get("/add-book", (req, res) => {
    const book = new Book({
      title: "hello world",
      author: "javascript",
    });

    book
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/get-book", (req, res) => {
    Book.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
