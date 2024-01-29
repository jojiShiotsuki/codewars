// corrupted which means some of the characters were replaced with asterisks ("*").

// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
// result = "abcde"


// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
// result = "a#cd#"


function assembleString(array){
  
	// check to see if array has elements or is different than undefined
	if (array.length == 0) {
	  array = [''];
	};
	
	// creates a list of the letters of the first element in the array
	let x = array[0].split('');
	
	
	// loops through all elements of the array checking for the * char on each position and replacing it
	// if it exists
	let result = array.map(e => {
  
	  for (let i=0; i < e.length; i++) {
  
		if (x[i] == "*" && e[i] !== "*") {
		  // replace x element at i position with e element at i position
		  x[i] = e[i];
		};
	  };
  
	});
  
	// if the final list still contains * changes the * to the #
	let answer = x.map(e => {
	  if (e == "*") {
		e = "#";
	  };
	  return e;
	});
  
	// turns final list into string
	answer = answer.join('');
	  
	
	return answer;
  }