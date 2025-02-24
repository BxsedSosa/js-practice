const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const homeRouter = require("./routes/home");
const usersRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRouter.router);
app.use(usersRouter);

app.listen(3000);
