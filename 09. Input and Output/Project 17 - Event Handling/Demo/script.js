//This script is to demonstrate Event Handling. If user clicks on the heading, a new heading appears and if he re-clicks on it, the old heading appears. Happens infinately till user gets bored

var headingToReplace = document.getElementById("mainHeading");

headingToReplace.onclick = function () {
	headingToReplace.innerHTML = "Haha. Now I am gone!";
}