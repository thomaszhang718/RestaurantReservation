// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Table Reservations (DATA)
// =============================================================

var tableArray = require('./app/data/table-data.js');

/*	tableArray.push(
		{	
			name: "Phil",
			phoneNumber: "222-555-5555",
			email: "phil@email.com",
			uniqueID: "222"
		}
	)*/

//console.log(tableArray);
//console.log(tableArray.length)


// Waiting List (DATA)
// =============================================================

var waitlistArray = require('./app/data/waitlist-data.js');
//console.log(waitlistArray);
//console.log(waitlistArray.length)

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){

	//res.send("Welcome to the Home Page!")
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/reserve', function(req, res){

	//res.send("Welcome to the Add Reservation Page!")
	res.sendFile(path.join(__dirname + '/reserve.html'));
})

app.get('/tables', function(req, res){

	//res.send("Welcome to the View Tables Page!")
	res.sendFile(path.join(__dirname + '/view.html'));
})






app.get('/api/tables', function(req, res){

	console.log(tableArray)

	req.json(tableArray);

})

app.get('/api/waitlist', function(req, res){

	console.log(waitlistArray)

	req.json(waitlistArray);

})


// Create New Reservation - takes in JSON input
app.post('/api/tables', function(req, res){

	var newreservation = req.body;

	console.log(newreservation);

	tableArray.push(newreservation);
	//console.log(tableArray);

	res.json(true);

})

/*app.post('/api/waitlist', function(req, res){

	var newreservation = req.body;

	console.log(newreservation);

	waitlistArray.push(newreservation);

	res.json(newreservation);



})
*/



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
