const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRouters = require("./routes/admin.js");
const shopRouters = require("./routes/shop.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouters);
app.use(shopRouters);

app.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(3000);
