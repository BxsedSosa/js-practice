const router = require("./routes/router");

async function main() {
  const express = require("express");
  const app = express();
  const port = 3000;

  app.set("view engine", "ejs");
  app.set("views", "./views");

  app.use(express.static("public"));
  app.use("/", router);

  app.listen(port, () => {
    console.log(`Now connected to server on port: ${port}`);
  });
}

main();
