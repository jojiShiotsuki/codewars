// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, 
// this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead,
//  he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length.
//  Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//Parameters = array of numbers, character no, no floating point, not negative, not null
//Return = array but smallest and largest number in the array
//Example = [1,2,3,4,5] = [1,5] : [1] = [1,1]
//Pseudocode = Math.min and Math.max, smallest and largest number = put in a array and then return the array..

function minMax(arr){
  
	let retArr = [];
	
	retArr.push(Math.min(...arr))
	retArr.push(Math.max(...arr))
	
	return retArr; // fix me!
}