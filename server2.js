var port = 3000;//getRandomInt(3000, 3099);

var routingTable = [{"port": port, "id":1, "hops":0}];
var GlobalSocket;

var node1 = "node1";
var node2 = "node2";


//Cerver 2 config
var app = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

//Client 1 config
var io_client = require('socket.io-client');
















//Server 1
console.log("\n",node1, " Started!\n");

io.on('connection', function (socket){
	GlobalSocket = socket;
	recieve(node1);
});


http.listen(port, function () {
	console.log(node1, "Server 2 listening on : ", port);
});







//Client 1
send(port+1, node2,routingTable[0]);















//
function recieve(node){
	GlobalSocket.on(node, function (packet) {
		console.log("From ", node2,", Packet: ", packet);
	});
}








//			 3000 "TEXT" {ID:"BUTTS"}
function send(PORT,tag, packetToSend){

	var socket_client = io_client.connect('http://localhost:' + PORT, 
											{reconnect: true});
	socket_client.emit(tag, packetToSend);
}



















function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}