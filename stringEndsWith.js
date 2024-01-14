// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//Parameter = 2 strings
//Return = boolean of true or false.
//Example = 
//Pseudocode = 

function solution(str, ending) {
    if(ending === ''){
      return true;
    }
    // If the length of the ending string is greater than the original string, it can't be a match
    if (ending.length > str.length) {
        return false;
    }

    // Use slice to get the ending part of the original string with the same length as the ending string
    const endingPart = str.slice(-ending.length);

    // Compare the ending part with the ending string
    return endingPart === ending;
}