//Program to peform a comparision between 2 strings and then also see if a given set of charactes is there in a string

var str1 = prompt("Enter the first string");
var str2 = prompt("Enter the second string");

if(str1.toLowerCase() == str2.toLowerCase()){
	alert("The two strings are equal when case sensitivity is ignored");
}


//To search for a given set of characters from a string
var str1 = prompt("Enter a string");
var str2 = prompt("Enter a phrase");

if ( str1.indexOf(str2) ) {
	// The character set exists
	alert("The string exists");

} else {
	// The character set does not exist
	alert("The string does not exist");

}

// alert(status);

