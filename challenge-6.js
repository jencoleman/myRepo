var data = [];
// Name ID ParentID
data[0] = ["John", "1", ""];
data[1] = ["Greg", "2", "1"];
data[2] = ["Mary", "3", ""];
data[3] = ["Mitch", "4", "1"];
data[4] = ["Bob", "5", "3"];
data[5] = ["Steve", "6", "1"];
data[6] = ["Eve", "7", "4"];
data[7] = ["Jacob", "18", "4"];
data[8] = ["Brian", "19", "7"];
data[9] = ["Kofi", "32", "7"];
data[10] = ["Mary", "33", "1"];
data[11] = ["Benson", "36", "7"];
data[12] = ["Monty", "37", "5"];


var genCount = function(){ 

	var content = "";
	
	for (i=0; i < data.length; i++){
	
		if ( data[i][2].length < 1) {
		
			content += "<div class=\"first\">" + data[i][0] + "</div>";
			}
		else {continue;}
			
		for (h=0; h < data.length; h++){
			
			if (data[i][1] == data[h][2]) {
				content += "<div class=\"second\">" + data[h][0] + "</div>";
			}
			else {continue;}
				
				for (b= 0; b < data.length; b++) {
					
					if (data[h][1] === data[b][2]) {
						content += "<div class=\"third\">" + data[b][0] + "</div>";
					}
					else {continue;}
					
					for (v=0; v < data.length; v++){
						
						if (data[b][1] === data[v][2]) {
							content += "<div class=\"fourth\">" + data[v][0] + "</div>";
						}
						else {continue;}
					}
			
				}
			}

document.getElementById("body").innerHTML = content;
	}
	}
/*create a counter at 1, search the array for a parent. if there is a parent value, add one. search the array again for a parent's parent... if none, return generation. If there is, add one.

group children of the same parents

grab the parent value. Order it immediately ahead of child.

determin how many generations are in the diagram

determine which generation the value is
starting with the oldest generation, create a div for each person in that generation.

then find the children of the first oldest, and create a div for each within that div.

then cycle second generation, create a div for each child of that parent


}*/