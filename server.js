// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
//var PORT = process.env.PORT || 3000;
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Table Reservations (DATA)
// =============================================================
var tableArray = require('./app/data/table-data.js');
//console.log(tableArray);

// Waiting List (DATA)
// =============================================================

var waitlistArray = require('./app/data/waitlist-data.js');
//console.log(waitlistArray);


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



/*app.get('/api/:characters?', function(req, res){

	var chosen = req.params.characters; //darthmaul

	if(chosen){
		console.log(chosen);

		for (var i=0; i <characters.length; i++){

			if (chosen == characters[i].routeName){
				res.json(characters[i]);
				return;
			}
		}

		res.json(false);
	}

	else{
		res.json(characters);
	}
})

// Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

	var newcharacter = req.body;
	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase();

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);

	// Client Get Call http://localhost:3000/new?characterName=Steve&characterRole=Nothing+%2F+Dea…r+Engineer+%2F+Janitor&characterAge=29&characterPoints=199&routeName=steve

	// req = http://localhost:3000/new?
	// characterName=Steve
	// characterRole=Nothing+%2F+Dea…r+Engineer+%2F+Janitor
	// characterAge=29
	// characterPoints=199
	// routeName=steve

})
*/
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})
