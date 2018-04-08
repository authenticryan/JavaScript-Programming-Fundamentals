// This program is to illlustrate how one function can call the other function so that the final function prints the result

//When user clicks on main heading, the text changes

var heading = document.getElementById("mainHeading");

function firstFunction () {
	secondFunction();
}

function secondFunction () {
	thirdFunction();
}

function thirdFunction () {
	finalFunction();
}

function finalFunction () {
	heading.innerHTML  = "Suprise!";
} 

heading.onclick = function () {
	firstFunction();
}