//This script is to demonstrate Event Handling. If user clicks on the heading, a new heading appears and if he re-clicks on it, the old heading appears. Happens infinately till user gets bored


var mainHeadingTop = document.getElementById("mainHeading");
var orginalHeadingTop = document.getElementById("mainHeading").textContent;
var count = 0;

mainHeadingTop.onclick = function () {
	if( count % 2 == 0 ){
		mainHeadingTop.innerHTML = "Suprise";
	} else {
		mainHeadingTop.innerHTML = orginalHeadingTop;
	} 

	count++;

}