var mongo = require('mongodb');
var config = require('../config');
var converter = require('../conv/ExpenseConverter');

var MongoClient = mongo.MongoClient;

exports.do = function(req) {

  return new Promise(function(success, failure) {

    return MongoClient.connect(config.mongoUrl, function(err, db) {

      db.db(config.dbName).collection(config.collections.expenses).find().toArray(function(err, array) {

        db.close();

        if (array == null) {
          success({expenses: []});
          return;
        }

        var expenses = [];

        for (var i = 0; i < array.length; i++) {
          expenses.push(converter.expenseTO(array[i]));
        }

        success({expenses: expenses});

      });
    });
  });

}
