
/*
var content = function() {
}
	for (i = 0; i < 10 ; i++) {
	("<div id=\"c" + i + "\" class=\"column\">");
	
	for ( z = 0; z < 10; z++) {
	("<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>");
	}
		("</div>");
}
}

document.getElementById("grid").innerHTML = content();

//2nd one
var content = "";

var someFunction = function() {
	for (i = 0; i < 10 ; i++) {
	content.push("<div id=\"c" + i + "\" class=\"column\">");
	
	for ( z = 0; z < 10; z++) {
	content.push("<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>");
	}
		content.push("</div>");
}
}

document.getElementById("grid").innerHTML = content;


//3rd one
function setHtml() {
var content = "";
var elem = document.getElementById("grid");

 for (i = 0; i < 10 ; i++) {
content.push("<div id=\"c" + i + "\" class=\"column\">");
for ( z = 0; z < 10; z++) {
content.push("<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>");
}
content.push("</div>");
}
}
 elem.innerHTML = content;
}

setHtml();

//4th one
function setHtml() {
var content = "";
var elem = document.getElementById("grid");

 for (i = 0; i < 10 ; i++) {
 content += "<div id=\"c" + i + "\" class=\"column\">";
for ( z = 0; z < 10; z++) {
content +="<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>";
}
content += "</div>";
}
}
 elem.innerHTML = content;
}

setHtml();
*/
//5th one
var content = "";

var someFunction = function() {

	for (i = 0; i < 10 ; i++) {

		content += "<div id=\"c" + i + "\" class=\"column\">";

		for ( z = 0; z < 10; z++) {

			content +=("<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>");

}

		content +=("</div>");

}

}
someFunction();

var elem = document.getElementById("grid");

elem.innerHTML = content;
