//NODE 1
//https://stackoverflow.com/questions/10703513/node-js-client-for-a-socket-io-server#10703684
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//client.js
var io_client = require('socket.io-client');
var socket_client = io_client.connect('http://localhost:3001', {reconnect: true});



//Server 1
/*
io.on('connection', function (socket){
   //console.log('Connected From Server 2');

  socket.on('CH01', function (fromServer2) {
    console.log('Message ', fromServer2);
  });

});

http.listen(3000, function () {
  //console.log('listening on *:3000');
});


*/










//CLient 1
// Add a connect listener
/*socket_client.on('connect', function (socket) {
    console.log('Client 1- Connected!\n');
});*/

socket_client.emit('CH02', {'Client_1_port':123});












print("NODE 1 is running!");




function print(x){
	console.log(x);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}