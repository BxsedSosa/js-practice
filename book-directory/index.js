const { Database } = require("./databases/db");
const router = require("./routes/router");

function main() {
  const express = require("express");
  const app = express();
  const port = 3000;

  app.set("view engine", "ejs");
  app.set("views", "./views");

  app.use("/", router);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
