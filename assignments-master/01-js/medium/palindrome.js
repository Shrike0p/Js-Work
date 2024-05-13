/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
//nitin  n=n i=i t=t
function isPalindrome(str) {
  let l=str.length
  let x=str.trim()
  let v=x.toLowerCase()
  v = v.replace(/[^a-z0-9]/g, '');
  let ispalin=true
  let a=[];
  for(let i=v.length-1, j=0;i>=0;i--,j++){
    a[j]=v[i]
  }
  for(let i=0;i<v.length;i++){
    if(a[i]!=v[i]){
      ispalin=false;
      break;
    }
  }
  return ispalin;

}


module.exports = isPalindrome;

//-----------------another appraoch--------------------------------------
// function isPalindrome(str) {
//   // Step 1: Convert to lowercase to handle case-insensitivity
//   let cleanedStr = str.toLowerCase();

//   // Step 2: Remove non-alphanumeric characters (including spaces and punctuation)
//   cleanedStr = cleanedStr.replace(/[^a-z0-9]/g, '');

//   // Step 3: Reverse the cleaned string
//   const reversedStr = cleanedStr.split('').reverse().join('');

//   // Step 4: Check if the cleaned original matches the reversed version
//   return cleanedStr === reversedStr;
// }


//const chars = cleanedStr.split(''); // ['h', 'e', 'l', 'l', 'o']

// Step 2: Reverse the array
// chars.reverse(); // ['o', 'l', 'l', 'e', 'h']

// // Step 3: Join the reversed characters into a string
// const reversedStr = chars.join(''); // "olleh"