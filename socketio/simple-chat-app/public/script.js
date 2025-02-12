const socket = io("http://localhost:3000", {
  auth: {
    secret: "this is a secret",
  },
  query: {
    life: 42,
  },
});

socket.on("welcome", (data) => {
  console.log(data);
  socket.emit("thankYou", [4, 5, 6]);
});

socket.on("newClient", (data) => {
  console.log(`Message to all clients... ID joined: ${data}`);
});

socket.on("msgFromServerToAllClients", (data) => {
  document.getElementById("display").innerHTML +=
    `<h5>User: ${data.id} Time: ${data.time}</h5><li>${data.newMsg}</li>`;
  window.scrollTo(0, document.body.scrollHeight);
});

document.getElementById("message").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("msg").value;
  document.getElementById("msg").value = "";
  socket.emit("msgFromClientToServer", message);
});
