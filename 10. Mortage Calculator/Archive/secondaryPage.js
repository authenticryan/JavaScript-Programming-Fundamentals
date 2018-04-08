
// This script is to define the behaviour when user interacts with "secondaryPage.html".

var button = document.getElementById("calculate");
var calculatedMortage = document.getElementById("finalResult");

function calculateMortage () {
	// This functions main task is to calculate the mortage when the calculate button is clicked.


	var rate = document.getElementById("rate").value;
	var principle = document.getElementById("principle").value;
	var years = document.getElementById("years").value;

	rate = Number(rate);
	principle = Number(principle);
	years = Number(years);

	rate = ((rate / 12) / 100);			// This is to convert rate from a percentage to a decimal value which indicates monthly rate of interest.
	var powerTemp = Math.pow( 1 + rate , - (years * 12));		// This is to a result of a small conputation from the main formula

	var result = (rate * principle)/(1 - powerTemp);

	if ( !isNaN(result) ) {
	
		calculatedMortage.innerHTML = result + " is the monthly amount you are supposed to pay.";		// Go in the document and replace the empty space by the final value
	
	} else {

		calculatedMortage.innerHTML = "Please reload and recheck the elements";		// Go in the document and replace the empty space by the final value
	
	}
}


button.onclick = function () {
	calculateMortage();
}

