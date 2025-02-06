const mongoose = require("mongoose");
const credentials = require("../config/info.json");

class Database {
  constructor() {
    this.URI = `mongodb+srv://${credentials.user}:${credentials.pass}@chat-app.4lplp.mongodb.net/?retryWrites=true&w=majority&appName=chat-app`;
  }

  connect = async () => {
    try {
      await mongoose.connect(this.URI);
      console.log("Connected to server");
    } catch (err) {
      console.error("Error MSG: ", err);
    }
  };
}

exports.Database = Database;
