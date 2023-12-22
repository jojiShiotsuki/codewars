// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59TTT
// 0 <= s <= 59

//PARAMATERS = hour , min, sec, wholeNumbers, 
//Returns = integer whole
//Example = 
//pseudocode = 

function past(h, m, s){
	h = h * 60 * 60 * 1000;
	m = m * 60 * 1000;
	s = s * 1000;
	
	return s + m + h;
	
  }