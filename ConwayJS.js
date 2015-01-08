var createArrayGrid = function() {

	var elem = document.getElementById("grid");
	
	var content = "";
	
	var cellCounter = 0;
	
	var cellArray = [];

	for (i = 0; i < 10 ; i++) {
	
		content += "<div id=\"c" + i + "\" class=\"column\">";
		
		for ( z = 0; z < 10; z++) {
	
				content +="<div id=\"[" + i + "][" + z + "]" + "\" class=\"cell\">" + cellCounter + "</div>";
				
				cellCounter++;
				
				cellArray.push("[" + i + "][" + z + "]");
			
		}
		
			content +=("</div>");
			
		}
		
	elem.innerHTML = content;
	
	}


//Change cell class to live
var itsAlive = function(){
	
	var myCell = document.getElementById("[2][2]");
	
	myCell.className = "live";
	
}

