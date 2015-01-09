var cellArray = [];

var createArrayGrid = function() {

	var elem = document.getElementById("grid");
	
	var content = "";
	
	var cellCounter = 0;
	
	

	for (i = 0; i < 10 ; i++) {
	
		content += "<div id=\"c" + i + "\" class=\"column\">";
		cellArray.push([]);
		
		for ( z = 0; z < 10; z++) {
	
				content +="<div id=\"" + i + "-" + z + "\"class=\"deadCell\">" + cellCounter + "</div>";
				cellCounter++;
				cellArray[i].push("deadCell");
				
			}
			content +=("</div>");
		}
	elem.innerHTML = content;
	console.log(cellArray);
	
	}
	
	


//Change cell class to live
var itsAlive = function(){
	
	var myCell = document.getElementById("2-2");
	
	myCell.className = "liveCell";
	
	cellArray[2-2] = "liveCell";
	
}

