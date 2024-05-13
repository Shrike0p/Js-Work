/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const hash = new Array(123).fill(0);
  for(let i=0;i<str1.length+1;i++){
    for(let j=0;j<str2.length;j++){
      if (str1[i]===str2[j]){
        hash[str1[i]]++;
      }
    }
  }
  let nonAangram;
  for(let i=0; i<hash.length;i++){
    if(hash[i]>1){
      nonAangram=true;
      break;
    }
  }

  if (nonAangram) {
    return false
  } else {
    return true
  }
}

module.exports = isAnagram;
