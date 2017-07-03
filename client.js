//NODE 2

var genPort = 3000+ getRandomInt(1, 1000);

var nodeTable = [{"id":2,"port": genPort,"tty":0}];

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var localStorage = "defult";


	var io_client = require('socket.io-client');


//S2

io.on('connection', function (socket){
   console.log('Connecting From Server 1');

  socket.on('CH02', function (fromNode1) {
    console.log('Message AAAA', fromNode1);

	try{  

		if(fromNode1.tty === 1) throw "tty=1";
		if(nodeTable.length > 2 ) throw "tty=max";

		fromNode1.tty += 1;
		nodeTable.push(fromNode1);


		console.log("Node Table bbb", nodeTable);

		console.log(nodeTable.length);

		send(nodeTable[1].port,nodeTable[0],'CH01');

	}catch(err){
		//console.log("ERROR : " + err);
		if(err === "tty=1"){
			console.log("works : tty=1");
			console.log("Node Table 1", nodeTable);
		}

		if(err === "tty=max"){
			console.log("works : tty=max");
			nodeTable[0].tty +=1;
		  
			console.log("Node Table 1", nodeTable);

		   	send(nodeTable[1].port,nodeTable[0],'CH01');

		}
	}




  });


	socket.on('data', function(datafromS1){
		console.log(WORKS);
	});

});

http.listen(genPort, function () {
  //console.log('listening on *:3001');
});






//CLient 2
/*
socket_client.on('connect', function (socket_client) {
    console.log('Client 2- Connected! ');
});
*/



function send(port,dataTosend, tag){

	var socket_client = io_client.connect('http://localhost:' + port, {reconnect: true});
	socket_client.emit(tag, dataTosend);
}



//setTimeout(send, 100);


console.log("NODE 2 is running! on port: ",genPort);

function print(x,y){
	console.log(x,y);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}