const express = require("express"); // import express
const app = express(); // create express app  
const http = require("http"); // create http server
const server = http.createServer(app); // create http server
const { server } = require("socket.io"); // create socket server
const io = new Server(server); // create socket server




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
server.listen(3000, () => {
    console.log('listening on *:3000');
  });

