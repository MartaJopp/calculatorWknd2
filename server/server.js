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
// Subtraction POST route
app.post('/subtraction', function(req, res){
    console.log(req.body); //the object of numbers received
    res.sendStatus(201);
    firstNumber = parseInt(req.body.input1);
    secondNumber = parseInt(req.body.input2);
    subtractionResult = firstNumber - secondNumber; // need to think about negative number...actually negative works!
    console.log(subtractionResult);
    console.log(firstNumber, secondNumber)
}); // end subtratction POST route
// subtraction GET
app.get('/subtraction', function(req, res){
    res.send({result: subtractionResult}); // send the subtraction result as a number
})
// corresponding multiply POST route
app.post('/multiply', function(req, res){
    res.sendStatus(201);
    firstNumber = parseInt(req.body.input1); //req.body is the data that was received - taking the property input1
    secondNumber = parseInt(req.body.input2); //taking the property input2 from the data
    multiplyResult = (firstNumber * secondNumber);
    console.log(multiplyResult);
}); //end multiply POST route
// multiply GET request
app.get('/multiply', function(req, res){
    res.send({result: multiplyResult})
})//end multiply GET route
//corresponding dividsion POST route
app.post('/divide', function (req, res){
    res.sendStatus(201);
    firstNumber = parseInt(req.body.input1);
    secondNumber = parseInt(req.body.input2);
    divideResult = (firstNumber / secondNumber);
    console.log(divideResult);
}); // end divide POST route
// divide GET request
app.get('/divide', function(req, res){
    res.send({result: divideResult})
})// end divide GET route