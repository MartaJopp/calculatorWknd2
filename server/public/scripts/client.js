//js file sourced
console.log('script sourced');



// once html is loaded
$(document).ready(readyNow);

// readyNow function to hold click handlers
function readyNow(){
    console.log('jquery sourced'); // checking to see if jquery is sourced
    $('#add').on('click', sumThis); // when the add button is clicked - run sumThis function
    $('#subtract').on('click', subtractThis); // when the subtract button is clicked - run subtractThis fx
    $('#divide').on('click', divideThis); // when the divide button is clicked - run divideThis fx
    $('#multiply').on('click', multiplyThis) // when multiply is clicked - run multiplyThis fx
} // end readyNow function


function sumThis(){
    console.log ('add clicked');
    console.log('Input 1', $('#firstNumberInput').val(), 'Input 2', $('#secondNumberInput').val());
  var numbersToCalculate = { // object constructor to be able to POST numbers as object
    input1: $('#firstNumberInput').val(),
    input2: $('#secondNumberInput').val()
  }  
  console.log('The Numbers', numbersToCalculate); // console logging object constructor
  // take in object data and send to server - make corresponding records POST route in server
  $.ajax({
      method: 'POST',
      url: '/addition',
      data: numbersToCalculate
  })
  .done(function(response){
      console.log(response);
      additionResult(); // calls additionResult function which displays to the DOM
  }).fail(function(message){
      console.log('Error', message);
  })
} // end sumThis function

function additionResult(){
    $.ajax({
        method: 'GET',
        url: '/addition'
    }).done(function(response){
        var additionToDisplay = response; //pulls the response and renames
        console.log(additionToDisplay);
        $('#result').text(additionToDisplay.result); //append the number property to the DOM
    })
} // end additionResult function
