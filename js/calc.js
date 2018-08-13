//add your code here
$(document).ready(function(){
  domath();
  result();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');
var result = $('#result');

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
     num2 = parseFloat(num2.val());
   operator = operator.val();
	
  });
}
function result(operator,num1,num2)
{
let turkey = num1operatornum2;
	return result.val(turkey)
}
