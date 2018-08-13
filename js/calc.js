//add your code here
$(document).ready(function(){
  domath();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(){
  $('#equals').on('click', function(){
    num = parseFloat(num1.val());
  }
}