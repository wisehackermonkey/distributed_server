//NODE 2

var nodeTable = {};

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var localStorage = "defult";


//var io_client = require('socket.io-client');
//var socket_client = io_client.connect('http://localhost:3000', {reconnect: true});




//S2

io.on('connection', function (socket){
   console.log('Connecting From Server 1');

  socket.on('CH02', function (randomNumber) {
    console.log('Message ', randomNumber);

    localStorage = randomNumber;

  });

});

http.listen(3001, function () {
  console.log('listening on *:3001');
});





/*
//CLient 2
function connect(){
	//client.js

	// Add a connect listener
	socket_client.on('connect', function (socket_client) {
	    console.log('Client 2- Connected! ');
	});
	socket_client.emit('CH01', 'Client 2' + localStorage);

}
*/





//setTimeout(connect, 1000);


print("NODE 2 is running!");

function print(x){
	console.log(x);
}