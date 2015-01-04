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
