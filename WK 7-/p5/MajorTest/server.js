// server using 'express'

var express = require('express');

// create an app of 'express'
var app = express();

// set up the server to listen at port 3000
var server = app.listen(3000);

// look in 'public'
app.use(express.static('public'));
  console.log("my socket server is running");

// websocket section use socket.io library
var io = require('socket.io')(server);

// callback runs for each individual connection
io.sockets.on('connection',newConnection);

  function newConnection(socket){
  console.log("hello! New Connection:  " +  socket.id);

// when this user emits, client side: socket.emit('someevent',some data);
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){ //data comes in as sent
    console.log("!Hello new data recieved: 'mouse' " +data.x+ " "+data.y);
    // send to other clients
    socket.broadcast.emit('mouse', data);

    // this code sends to all INCLUDING the sender
    // io.sockets.emit('message', "this goes to everyone");
    // if that's what I want...

  }


  socket.on('disconnect', function(){
    console.log("!!Bye, Client disconneted");
  });
}
