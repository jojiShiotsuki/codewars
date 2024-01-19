// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//Paramaters = 1 string, no > 9, always starts with 1.
//Return = string.
//Example = 
//Pseudocode = split through space, map to look for number, 

function order(words) {
	if (words.trim() === "") {
	  return ""; // Return an empty string if the input is empty
	}
  
	const wordsArray = words.split(' ');
  
	const sortedArray = wordsArray.sort(function(a, b) {
	  // Extract the numbers from the words and compare them for sorting
	  const numA = Number([...a].filter(char => !isNaN(char)).join(''));
	  const numB = Number([...b].filter(char => !isNaN(char)).join(''));
  
	  return numA - numB;
	});
  
	const result = sortedArray.join(' ');
	return result;
  }