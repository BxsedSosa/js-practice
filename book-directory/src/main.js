main();
function main() {
    var express = require("express");
    var app = express();
    var port = 3000;
    app.get("/", function (_, res) {
        res.send("Hello World");
    });
    app.listen(port, function () {
        console.log("Example");
    });
}
