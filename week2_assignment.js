
var string = "Marbles is a chicken";
var que = "";
		
for (var i = string.length - 1; i>=0; i--) {
      
	   switch (string[i]) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
		case "y":
		case "A":
		case "E":
		case "I":
		case "O":
		case "U":
		case "Y":

			break;
		default:
			que += string[i];
			break;
	};
 }
 console.log(que);


 		
