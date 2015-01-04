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
