//This is a sample program to store data in a array and print them using a alert prompt. Store 5 values

//Remember: arrays in JavaScript are NOT strongly typed.


var myCollection = [50,70,100,"Hello","World"], total = 0;

for ( var i = 0; i < 5; i++ ) {
	alert( myCollection[i] );

	if ( !isNaN(myCollection[i])) {
		total += myCollection[i];
	}
}

alert("Total of all numbers in myCollection is " + total);