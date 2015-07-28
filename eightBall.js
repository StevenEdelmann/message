//regardless of the question, the eight ball needs to give some stupid answer.
var net = require('net');
var port = 9001; //IT'S OVER 9000!!!
var fs = require('fs'); //get that fs shit.

var replies = JSON.parse(fs.readFileSync('./formattedReplies.json', "utf8")); //get the object of all the answers, and parse it to be a 
//workable piece of data.

var server = net.createServer(function(connection){
	console.log('client connected.');
	connection.write('You have reached the magic eight ball. Ask a question, and I shall bestow you an answer.');

	connection.on('data', function(recievedData){ //manipulate the data recieved from the client.
		recievedData = recievedData.toString().trim(); //get that thing into a good working string.
			if(recievedData[recievedData.length-1] === "?"){
				var randomReply = replies[Math.floor(Math.random()*replies.length)]; //grab the random element.
				connection.write(randomReply.reply); //give to them the random reply.
				console.log(recievedData);
				console.log(randomReply.reply);
			} //end of if statement
			else {
				connection.write("That's not a question, a question needs to end with a ? mark");
			}
	}); //end of connection.on('data').

}); //end of server.

server.listen(port, function(){
	console.log("the server is running on port " + port);
}); //end of server.listen().

