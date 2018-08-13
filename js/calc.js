//add your code here
$(document).ready(function(){
  doMath();
  //result();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');
//var result = $('#result');


function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    console.log(num1)
    operator = operator.val();
	  result(operator,num1,num2);
  });
}

function result(operator,num1,num2){
  let turkey = num1 + num2;
  console.log(turkey)
  return 5
//	return result.val(turkey)
}
  
