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
			
		for (h=0; h < data.length; h++){
			if (data[i][1] != data[h][2]) continue;
			if (data[i][1] == data[h][2]) {
				content += "<div class=\"second\">" + data[h][0] + "</div>";
			}
				
				for (b= 0; b < data.length; b++) {
					if (data[h][1] !== data[b][2]) continue;
					if (data[h][1] === data[b][2]) {
						content += "<div class=\"third\">" + data[b][0] + "</div>";
					}
					
					for (v=0; v < data.length; v++){
						if ( data[b][1] !== data[v][2]) continue;
						if (data[b][1] === data[v][2]) {
							content += "<div class=\"fourth\">" + data[v][0] + "</div>";
						}
					}
			
				}
			}

document.getElementById("body").innerHTML = content;
	}
	}