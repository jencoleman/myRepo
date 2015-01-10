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

for (z = 0; z < 10;i++) {

var currentCell = "cellArray[" + i + "][" + z + "]";
if (currentCell == "liveCell") {

 var tempId = i + "-" + z;
 var tempElement = document.getElementById(tempId);
 var tempString = "Cell id " + tempId + " is live.";
 
 console.log(tempString);
}
}
}
}

	// refreshGrid function
var refreshGrid = function() {

for (i = 0; i < 10; i++) {

for (z = 0; z < 10;i++) {

var currentCell = cellArray[i][z];
if (currentCell == "liveCell") {

 var tempId = i + "-" + z;
 var tempElement = document.getElementById(tempId);
 var tempString = "Cell id " + tempId + " is live.";
 
 console.log(tempString);
}
}
}
}

var refreshGrid = function() {

for (i = 0; i < 10; i++) {

for (z = 0; z < 10;i++) {

if (cellArray[i][z] == "liveCell") {

 var tempId = i + "-" + z;
 var tempElement = document.getElementById(tempId);
 var tempString = "Cell id " + tempId + " is live.";
 
 console.log(tempString);
}
}
}
}

