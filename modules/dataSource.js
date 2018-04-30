/* init database */
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var mongoClient = new MongoClient(new Server('ds263639.mlab.com', 63639));
var dbName = 'nodejsweather';

mongoClient.connect('177010451', 'Aa68151586', function(err, mongoClient) {
	var db = mongoClient.db(dbName);
	exports.db = db;
});