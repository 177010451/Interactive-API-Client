/* init database */
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var mongoClient = new MongoClient(new Server('localhost', 27017));
var dbName = 'Test';

mongoClient.connect(function(err, mongoClient) {
	var db = mongoClient.db(dbName);
	exports.db = db;
});