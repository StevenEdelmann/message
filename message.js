/*
	I need to use the fs and ejs stuff at this point, but idk how to use them that well. To be honest, I don't know what they a
	are used for, so I have no way of knowing how to actually use them. It makes me sad :( .
*/

var net = require('net');
var port = 9001; //IT'S OVER 9000!!!

var Server = net.createServer(function(connection){ //Server 
	connection.write("Hello client! Type ' manual ' at any time to read the manual");

	//Server variables:
	var messages = []; //this stores the messages.
	var idNum = 0; //idNum increments each time a new Message object is instantiated. I don't know if it being global will make it so that every instance of Message has the same idNum, and their idNums don't just get bigger.
	

	//Server methods/objects:
	var Message = function Message(message, idNum){ //holds all the messages methods and variables. 
		this.message = message, //This is what is actually written in the message
		this.idNum = idNum; //This is used to get the message when the user asks for it.
		this.hasBeenRead = false; //If true, then this will not show up as a new message when the user asks to see how many new messages he/she has.
	} //end of Message constructor

	connection.on('data', function(recievedData){ //manipulate the data recieved from the client.
		recievedData.toString(); //turn into a string.
		
		//var turnedIntoArray = recievedData.split(" "); //chop up the recieved data into an array of strings. For some reason this isn't working.
		//message - if the user doesn't type anything in except a string, or some message, than it is saved as as a new message.
		console.log('saved new message #' + idNum); //This is the messages IdNum, so the user will be able to easily reference it.

		//create a message object with the recievedData
		if(turnedIntoArray.length < 1){ //this will only run if the user only types in a message.
			var newMessage = Message(recievedData, idNum); //New message contains the message (which the user typed) and the idNum (which increments forever).

			messages.push(newMessage); //adds the message into the array.
		}
		else{ // if turnedIntoArray.length > 0

			if(turnedIntoArray === "manual"){
				connection.write("This is the manual. To send a message and save it, simply start writing your message. To check how many new messages you have, type check(). To read a message, type read(idNum), where idNum is the id number of the message you want to read. To delete an old message, type delete(idNum), where IdNum is the id number of the message you want to delete. To delete all messages, type delete(all).") //

			}
		}
	});

}); //end of Server.

Server.listen(port, function(){
	console.log("the server is running on port " + port);
}); //end of server.listen().