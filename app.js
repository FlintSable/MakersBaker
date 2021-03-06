// the name of this file could be anything
// this statement is an import statement for packages
// welcome to express
var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

// //Routes are searched after static

app.get('/',function(req, res){
	// req is from a post
	// res gets sent back to user
	res.send('Hello World');
});

app.get('/books',function(req, res){
	res.send('Hello BOOKS');
});

// // requests to server for static files will be searched here by express
// express server will server this up, even if this is a static file
app.use(express.static('public'));
app.use(express.static('src/views'));




// this applicaiton is now listening on this port
app.listen(port, function(err){
	console.log('running server on port '  +  port);
});

