//This script is to define functions that take real time inputs from the user and display the result on the screen

function addTwoNumbers (a, b) {
	var result = a + b;
	alert("The result is " + result);
	return result;
}

// var a = prompt("Enter the value of a");
// var b = prompt("Enter the value of b");


var result = addTwoNumbers(12,15);

alert("The value stored in result outside the function is " + result);