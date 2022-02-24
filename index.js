const express = require("express"); // import express
const res = require("express/lib/response");
const app = express(); // create express app  
const http = require("http"); // create http server
const server = http.createServer(app); // create http server




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
  });

