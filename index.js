var express = require('express');
var bodyParser = require("body-parser");
var postExpense = require('./dlg/PostExpenseDelegate');
var getExpenses = require('./dlg/GetExpensesDelegate');
var getExpenseDlg = require('./dlg/GetExpenseDelegate');

app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-correlation-id, x-msg-id");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
    next();
});


app.use(bodyParser.json());

// APIS
app.get('/expenses', (req, res) => {

    getExpenses.do(req).then((data) => {

        res.status(200).type('application/json').send(data)
    })

});

app.get('/expenses/:id', (req, res) => {

    getExpenseDlg.do(req).then((data) => {

        res.status(200).type('application/json').send(data)
    })

});

app.post('/expenses', (req, res) => {

    postExpense.do(req).then((data) => {

        res.status(201).type('application/json').send(data)
    })

});

app.listen(8080, () => {
    console.log('[kapi-mongo-api] - Up and running');
});