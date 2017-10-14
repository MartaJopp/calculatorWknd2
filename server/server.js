// require express
var express = require ('express');
var app = express();
var port = 5000;

// serve up static files
app.use(express.static('server/public'));

// start server
app.listen(port, function(){
  console.log('listening on port', port);
});

// need this for req.body to work 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var additionResult;
var subtractionResult;
var divisionResult;
var multiResult;
var firstNumber;
var secondNumber;

// Addition POST route
app.post('/addition', function(req, res){
    console.log(req.body); //the object of numbers received
    res.sendStatus(201);
    var firstNumber = parseInt(req.body.input1);
    var secondNumber = parseInt(req.body.input2);
    additionResult = firstNumber + secondNumber;
    console.log(additionResult);
    console.log(firstNumber, secondNumber)
});
// addition GET
app.get('/addition', function(req,res){
    res.send({result: additionResult}); // send the number as an object
})