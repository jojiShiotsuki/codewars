// // The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

//PREP
//Paremeter = number, number whole, not negative, float, not character
//Return = rounded down to integer, whole number
//Example = 1.08 = 30
//get from parameter = return with a calculation on converting it.

function cockroachSpeed(s){
	return Math.floor(s * 27.77778)
}