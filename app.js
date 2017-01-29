var express = require('express');

var app = express();

var port = 5000;

// requests to server for static files will be searched here by express
app.use(express.static('public'));

//Routes are searched after above
app.get('/', function(req, res){
	res.send("hello world");
});

app.get('/books', function(req, res){
	res.send("hello books");
});

app.listen(port, function(err){
	console.log('running server on port '  +  port);
});

