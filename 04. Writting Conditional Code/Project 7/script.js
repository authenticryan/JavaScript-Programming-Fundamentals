var balance = prompt("Please enter the balance statement");

if ( balance >= 0) {
	alert("The balance is positive");
	if ( balance > 10000) {
		alert("Great job!");
	}
} else {
	alert("You have to pay a penalty for not maintaining the account balance");
}
