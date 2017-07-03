//NODE 1
//https://stackoverflow.com/questions/10703513/node-js-client-for-a-socket-io-server#10703684
var nodeTable = [{"id":1,"port": 3000,"tty":0}];
var express = require('express');
//var app = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var server = app.listen(80);
app.use(express.static('public'));

//client.js
var io_client = require('socket.io-client');
//var socket_client = io_client.connect('http://localhost:3001', {reconnect: true});
//var socket_client;


//Server 1

io.on('connection', function (socket){
   console.log('Connected From Server 2');

  socket.on('CH01', function (fromNode2) {
    console.log('Message AAAA ', fromNode2);

    try{

    	if(fromNode2.tty === 1) throw "tty=0";
		if(nodeTable.length >= 2 ) throw "tty=max";
		
		fromNode2.tty += 1;

		nodeTable.push(fromNode2);
		

		console.log(nodeTable.length);
		send(nodeTable[1].port,nodeTable[0],'CH02');

	}catch(err){

		//console.log("ERROR : " + err);
		if(err === "tty=0"){ 
			console.log("works : tty=0");

			nodeTable[0].tty +=1;


			console.log("Node Table eee", nodeTable);

			send(nodeTable[1].port,nodeTable[0],'CH02');
			
		}

		if(err === "tty=max"){
			console.log("works : tty=max");


		}
	}

	});

	socket.on('send',function(){
		console.log("WORKS");
		send(nodeTable[1].port,"WOW SUPER COOL SHIT!!", 'CH02');
	});


});



http.listen(3000, function () {
  console.log('listening on *:3000');
});











//CLient 1
 /*socket_client.on('connect', function (socket) {
	    console.log('Client 1- Connected!\n port: ' +fromNode2.port);
	});
*/

for(var i = 0; i < 1000; i++){

	send((i+3000),nodeTable[0],'CH02');
}


function wait(){
	console.log("Ran times ");
}




function send(port,dataTosend, tag){

	var socket_client = io_client.connect('http://localhost:' + port, {reconnect: true});
	socket_client.emit(tag, dataTosend);
}



print("NODE 1 is running!");




function print(x,y){
	console.log(x,y);
}

function print(x){
	console.log(x);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}




