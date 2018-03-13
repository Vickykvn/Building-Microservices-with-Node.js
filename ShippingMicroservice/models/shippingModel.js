var DataAccess = require("./DataAccess.js");

var Model = function(){};

Model.prototype.GetReport = function(){
	return new Promise( function(fulfill, reject){	
		DataAccess.GetEntities("shipping_microservice", "shipping")
		.then(function(docs){
			fulfill(docs);
		}).catch(function(err){
			reject(err);
		});
	});
	
};



















Model.prototype.GetCSV = function(req,res){
	return {
		data : 
		[
			{
				_id: "id#", 
				name: "data point #1",
				value: 100.21
			}
		]
	}
};

module.exports = new Model();