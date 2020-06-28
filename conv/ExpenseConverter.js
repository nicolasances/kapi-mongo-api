var config = require('../config');
var moment = require('moment-timezone');

/**
 * Converts the provided mongodb json object into a TO
 */
exports.expenseTO = function (data) {

  if (data == null) return {};

  return {
    id: data._id,
    amount: data.amount,
    description: data.description
  };
}

/**
 * Creates a mongodb persistent expense
 */
exports.expensePO = function (data) {

  return new Promise(function (success, failure) {

    success({
      amount: parseFloat(data.amount),
      description: data.description
    });
  });

}
