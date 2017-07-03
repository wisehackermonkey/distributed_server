var socket;    
var URL_SERVER = 'http://localhost:3000';

var saveButton;


function setup() {

	createCanvas(400,400)
	background(50);

	sendButton();

  	setupSocket();
	
}
function draw() {}




function  setupSocket(){

	//inisiate the connection to server
	socket = io.connect(URL_SERVER);
}






function sendButton(){

	saveButton = createButton('send');
	saveButton.position(width/2-50, height/2);
	saveButton.mousePressed(send);


}



/*
----------------------

----------------------
*/
var  send = function(){
	socket.emit('send');		console.log("WORKS");

}





