
function back() {
window.location = "activity_1.html";
}

function getScore()
{
	scorevalue = localStorage.getItem("scorekey");	
	document.getElementById("update").innerHTML = "<h1>Score: " + scorevalue +"</h1>";
}