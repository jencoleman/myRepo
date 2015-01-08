//Create grid & array


var createArrayGrid = function() {

	var content = "";
	
	var cellCounter = 0;
	
	var cellArray = [];

	for (i = 0; i < 10 ; i++) {
	
		content += "<div id=\"c" + i + "\" class=\"column\">";
		
	for ( z = 0; z < 10; z++) {
	
		content +="<div id=\"[" + i + "][" + z + "]" + "\" class=\"cell\">" + "cellCounter" + "</div>";
cellCounter++;
cellArray.push("[" + i + "][" + z + "]");
}
content +=("</div>");
}
return content;
}

createArrayGrid();
var elem = document.getElementById("grid");
elem.innerHTML = content;

//Change cell class to live
var itsAlive = function(a){
	
	var myCell = document.getElementById("a");
	
	myCell.className = "live";
	
}

itsAlive("[2][2]");

/*
//Creates the grid

var createGrid = function() {
	
	

	for (i = 0; i < 10 ; i++) {
		
		var cellCounter = 0;
		
		var content = "";

		content += "<div id=\"c" + i + "\" class=\"column\">";
		
		for ( z = 0; z < 10; z++) {

			content +=("<div id=\"c" + i + "r" + z + "\" class=\"cell\">" + cellCounter+ "</div>");
			
			cellCounter++;

		}

		content +=("</div>");

	}
	return content;
	
}


//Creates the cell array


var createArray = function() {
	
	var cellArray = [];

	for (i = 0; i < 10 ; i++) {

		for ( z = 0; z < 10; z++) {

			cellArray.push("[" + i + "][" + z + "]");
			
		}
		
	}
	
	return cellArray;
}

createArray();*/


