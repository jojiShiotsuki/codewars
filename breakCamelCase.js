// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// complete the function
function solution(string) {
    let newString = string.split('');
  
    for(let i = 0 ; i < newString.length ; i++){
        
      if(newString[i] === newString[i].toUpperCase()){
        
        newString[i-1] += " "; 
      }
    }
  
  return newString.join('')
  
}