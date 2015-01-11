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
	
	// figure out how many neighbors are live
var getLiveNeighborCells = function(a, b) {
	var liveCounter = 0;
	var counterArray = [];

		if ( cellArray[a-1] !== undefined && cellArray[a-1][b] !== undefined) {
		var tempString = (a-1) + "," + b;
		counterArray.push(tempString);
	}
	if ( cellArray[a-1] !== undefined && cellArray[a-1][b-1] !== undefined) {
		var tempString = (a-1) + "," + (b-1);
		counterArray.push(tempString);
	}
	if ( cellArray[a] !== undefined && cellArray[a][b-1] !== undefined) {
		var tempString = a + "," + (b-1);
		counterArray.push(tempString);
	}
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b-1] !== undefined) {
		var tempString = (a+1) + "," + (b-1);
		counterArray.push(tempString);
	}
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b] !== undefined) {
		var tempString = (a+1) + "," + b;
		counterArray.push(tempString);
	}
	if ( cellArray[a+1] !== undefined && cellArray[a+1][b+1] !== undefined) {
		var tempString = (a+1) + "," + (b+1);
		counterArray.push(tempString);
	}
	if ( cellArray[a] !== undefined && cellArray[a][b+1] !== undefined) {
		var tempString = a + "," + (b+1);
		counterArray.push(tempString);
	}
	if ( cellArray[a-1] !== undefined && cellArray[a-1][b+1] !== undefined) {
		var tempString = (a-1) + "," + (b+1);
		counterArray.push(tempString);
	}
	
	for(i=0; i < counterArray.length; i++) { 
	
	var value = counterArray[i].toString();
	console.log(cellArray[2,2]);
	if (cellArray[value] == "liveCell") {
		liveCounter++;
		
	}

	}
	
	}
	
