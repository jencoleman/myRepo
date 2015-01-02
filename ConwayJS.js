var gridBuild = function(a, b) {

	for (i = 0; i < a ; i++) {
		
		document.write("<div id=\"c" + i + "\" class=\"column\">");
	
		for ( z = 0; z < b; z++) {
		
			document.write("<div id=\"c" + i + "r" + z + "\" class=\"cell\">lorem</div>");
		
		}
	
		document.write("</div>");
	
	}

}

var gridVariable = document.getElementById("grid");

gridVariable = gridBuild(10, 10);
