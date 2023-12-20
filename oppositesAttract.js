// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//Parameter - 2 flowers , are integers, whole numbers
//Return - true or false boolean
//Example - 0 , 0 = false,  1 3 = false, 2 , 5 = true, 7, 8 = true;
//Pseudocode - check val of f1 and f2 if both are similar im going to return false, and if they are not of the same value true.

function lovefunc(flower1, flower2){
	if((flower1 % 2 === 0 && flower2 % 2 === 0) || (flower1 % 2 !== 0 && flower2 % 2 !== 0)){
	  return false;
	}else{
	  return true;
	}
}