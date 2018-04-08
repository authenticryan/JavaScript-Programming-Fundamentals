//Ask the user for a number. If he enters a number, tell him its a number. If any garbage input, mention Not a Number

var myNumber = prompt("Please enter a Number");
myNumber = Number(myNumber);

if( !isNaN(myNumber) ){
	alert("It is a Number");
} else {
	alert("It is not a Number");
}