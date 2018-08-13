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
     num2 = parseFloat(num2.val());
   operator = operator.val();
	result = (num1operatornum2)
	return result
  });
}