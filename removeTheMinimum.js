// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, 
// remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

//Paramater = array of integers, 1 array, whole numbers, not negative, not float, not character. 
//Retrurn = Array.
//Example = [1,2,3,4,5], [2,3,4,5]; [2,2,1,2,1], [2,2,2,1]; [4,5,3,6], [4,5,6]
//Pseudocode = identify the min, take out from array, then return the array.


function removeSmallest(numbers) {
  let cpy = [...numbers]
  let min = Math.min(...numbers);
  let index = numbers.indexOf(min)
  cpy.splice(index, 1)
  
  return cpy;
}