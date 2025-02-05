const mongoose = require("mongoose");
const credentials = require("../config/info");
const Book = require("../models/books");

class Database {
  constructor() {
    this.URI = `mongodb+srv://${credentials.user}:${credentials.pass}@book-directory.4lplp.mongodb.net/?retryWrites=true&w=majority&appName=book-directory`;
  }

  connect = async () => {
    try {
      await mongoose.connect(this.URI);
      console.log("Connected to Mongo Database");
    } catch (err) {
      console.error("Error MSG:", err);
      process.exit(1);
    }
  };

  createBook = (inputTitle, inputAuthor) => {
    return new Book({
      title: inputTitle,
      author: inputAuthor,
    });
  };

  add = async (book) => {
    try {
      book
        .save()
        .then((result) => console.log(result))
        .catch((err) => console.log("Error: ", err));
    } catch (err) {
      console.error("Error: ", err);
    }
  };
}

exports.Database = Database;
