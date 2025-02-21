const path = require("path");
const express = require("express");

const homeRouter = require("./routes/home");
const usernameRouter = require("./routes/usernames");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRouter);
app.use(usernameRouter);

app.listen(3000);
