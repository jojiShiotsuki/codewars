// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//Paramaters = 1 string, no numbers, no negative.
//Returns = string
//Example = Joji Shiotsuki = J.S, Calvin Haris = C.H
//Pseudocode = take first letter of the first name then look for the space then get the first letter of the last name
//return it by joining the first letter the dot and the first letter of the last name.

function abbrevName(name){
  
	let initials = name.split(' ')
	
	return initials[0][0].toUpperCase() + '.' + initials[1][0].toUpperCase()
	
  }