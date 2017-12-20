var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  socket.on("add user", function(name, team) {
    socket.name = name;
    socket.team = team;
    socket.join(socket.team);
    socket.to(socket.team).emit("user connected", socket.name);
  });
  socket.on("disconnect", function() {
    socket.to(socket.team).emit("user disconnected", socket.name);
  });
  socket.on("card selected", function(card) {
    socket.card = card;
    socket.to(socket.team).emit("card selected", socket.name, socket.card);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
