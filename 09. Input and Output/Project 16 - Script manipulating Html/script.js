//This script has one main task: grab the content from container.html and change one of the headings.


//document. represents the understanding of the Document Object Model (DOM). The entire HTML page can be treated as a object. And remember, objects are containers with powerful properties 
// Also remember, you can manipute content of objects by using methods (: they are functions that belong to a object / need a object to call it)
var mainHeading = document.getElementById("mainHeading");
mainHeading.innerHTML = "HAHA. This is a updated text.";