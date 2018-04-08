//Program to simulate how JavaScript treats numbers and strings differently


//Defination of a function
function addNumbers (a, b, c) {			// c value 0 or 1. 0 for integer, 1 for String
	var result = a + b;

	if ( c == 0)				
		alert("Integer addition " + result);

	else if ( c == 1)
		alert("String addition " + result);

	else
		alert("Invalid Input ");
}


//Integer parameters 
addNumbers(10,20,0);


//String Parameters
addNumbers("10","20",1);

addNumbers("10","20",42);

