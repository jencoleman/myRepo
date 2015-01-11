var cellArray = [];

var createArrayGrid = function() {

	var elem = document.getElementById("grid");
	
	var content = "";
	
	var cellCounter = 0;
	
	

	for (i = 0; i < 10 ; i++) {
	
		content += "<div id=\"c" + i + "\" class=\"column\">";
		cellArray[i] = [];
		
		for ( z = 0; z < 10; z++) {
	
				content +="<div id=\"" + i + "-" + z + "\"class=\"deadCell\">" + cellCounter + "</div>";
				cellCounter++;
				cellArray[i][z] = "deadCell";
			}
			content +=("</div>");
		}
	elem.innerHTML = content;
	console.log(cellArray);
	
	}

//Change cell class to live
var itsAlive = function(a, b){
	
	var id = a + "-" + b;
	
	var myCell = document.getElementById(id);
	
	myCell.className = "liveCell";
	
	cellArray[a][b] = "liveCell";

	}
	
//Start grid with acorn
var acornAlive = function(){
	
	itsAlive(2,2);
	itsAlive(2,4);
	itsAlive(1,4);
	itsAlive(4,3);
	itsAlive(5,4);
	itsAlive(6,4);
	itsAlive(7,4);
	
}

//Change cell class to dead
var itsDead = function(a, b){
	
	var id = a + "-" + b;
	
	var myCell = document.getElementById(id);
	
	myCell.className = "deadCell";
	
	cellArray[a][b] = "deadCell";

	}
	
	// refreshGrid function
var refreshGrid = function() {

for (i = 0; i < 10; i++) {

for (z = 0; z < 10;z++) {

if (cellArray[i][z] == "liveCell") {

 var tempId = "\"" + i + "-" + z + "\"";
 var tempElement = document.getElementById(tempId);
 var tempString = "Cell id " + tempId + " is live.";
 
 console.log(tempString);
}
}
}
}

//run function


// run function
var run = function() {
	refreshGrid();
}

// figure out how many neighbors are live
var getLiveNeighborCells = function(a,b) {
	var neighborArray = [ cellArray[a-1][b], cellArray[a-1][b-1], cellArray[a][b-1], cellArray[a+1][b-1], cellArray[a+1][b], cellArray[a+1][b+1], cellArray[a][b+1], cellArray[a-1][b+1]];
	var liveCounter = 0;
	for (i=0; i < neighborArray.length; i++) {
	if (neighborArray[i] == "liveCell") {
		liveCounter++;
	}
	}
	console.log(liveCounter);
}
