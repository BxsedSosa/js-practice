const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginCredentialsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const LoginCredentials = mongoose.model(
  "LoginCredentials",
  LoginCredentialsSchema,
);
module.exports = LoginCredentials;
