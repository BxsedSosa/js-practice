const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
const expressServer = app.listen(port);

const socketio = require("socket.io");

const io = socketio(expressServer, {});

io.on("connect", (socket) => {
  console.log(`${socket.id} has joined our server`);

  socket.on("msgFromClientToServer", (newMessage) => {
    let time = new Date();
    io.emit("msgFromServerToAllClients", {
      id: socket.id,
      newMsg: newMessage,
      time: time,
    });
  });
});
