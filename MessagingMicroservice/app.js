
var express = require('express');
var app = express();
var path = require('path');

var config = require('config');
var microserviceConfig = config.get('microservice.config');

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('static'));

var model = require('./models/messagingModel');

app.get('/', function(req,res){
	res.render('index', { title: 'Messaging Microservice' });
});

// Get JSON Reporting data by report name
app.get('/getMessages', function(req,res){	
	model.GetMessages().then(function(docs){
		res.send(docs);
	}).catch(function(err){
		res.send(err);
	});	
});

app.get('sendMessage', function(req,res){

});


var server = app.listen(microserviceConfig.port, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server Running On: http://%s:%s', host, port);
});