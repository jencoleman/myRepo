var gridBuild = function(a, b) {

	document.write( " <div id= \"c" + i + "\" class = \"column\">" );

	for (i = 1 ; i <= a ; i++) {

		for(z = 1; i <= b; i++) {
		
			document.write( " <div id=\"c" + i + "r" + z + \" class=\"cell\"></div>" );

			}
			
		}
		
		document.write( "</div>" );
	}


}

getElementById("grid").innerHTML = gridBuild(100, 50);
