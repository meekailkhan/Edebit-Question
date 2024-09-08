// 1.Question)=> Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

// Examples
// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
// // ➞ " hv nvr sn  thn prsn drnkng Dt Ck."

// console.log(removeVowels("We're gonna build a wall!"))
// // ➞ "W'r gnn bld  wll!"

// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!"))
// // ➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
// Notes
// "y" is not considered a vowel.
function removeVowels(str){
    let vowels = "aeiouAEIOU";
    let arr = str.split("").filter(item => !vowels.includes(item)).join("")
    return arr
}
function removeVowels(str){
    let res = "";
    let vowels = "aeiouAEIOU"
    for(let i = 0 ; i < str.length ; i++){
        vowels.includes(str[i]) ? i : res += str[i];
    }
    return res
}
function removeVowels(str){
    return str.replace(/[aeiouAEIOU]/g,"")
}

function removeVowels(str){
    let vowels = "aeiouAEIOU"
    let res = str.split("").reduce((acc,char)=>{
        return vowels.includes(char) ? acc : acc + char 
    },"")
    return res
}

function removeVowels(str){
    if(str.length === 0) return ""
    let vowels = "aeiouAEIOU";
    let firstChar = vowels.includes(str[0]) ? "" : str[0];
    return firstChar + removeVowels(str.slice(1));
}
// -------------------------------------------------------------------------------------------------------------
// 2.Question)=> Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

// Examples
// console.log(firstVowel("apple")) //➞ 0

// console.log(firstVowel("hello")) //➞ 1

// console.log(firstVowel("STRAWBERRY")) //➞ 3

// console.log(firstVowel("pInEaPPLe")) //➞ 1
// Notes
// Input will be single words.
// Characters in words will be upper or lower case.
// "y" is not considered a vowel.
// Input always contains a vowel.
function firstVowel(str){
    let vowels = "aeiouAEIOU";
    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i])){
            return i
        }
    }
}

function firstVowel(str,index = 0){
    let vowels = "aeiouAEIOU";
    if(vowels.includes(str[0])){
        return index
    }
    return firstVowel(str.slice(1),index+1)
}

function firstVowel(str) {
    const vowels = 'aeiouAEIOU';
    let index = 0;
    for (const char of str) {
      if (vowels.includes(char)) {
        return index; // Return index as soon as the first vowel is found
      }
      index++;
    }
  }
// -----------------------------------------------------------------------------------------
// 3.Question)=> Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

// Examples
// console.log(asciiCapitalize("to be or not to be!")) //➞ "To Be oR NoT To Be!"

// console.log(asciiCapitalize("THE LITTLE MERMAID")) //➞ "THe LiTTLe meRmaiD"

// console.log(asciiCapitalize("Oh what a beautiful morning.")) //➞ "oH wHaT a BeauTiFuL moRNiNg."
// Notes
// N/A
function asciiCapitalize(str) {
    return str.split('').map(char => {
      const asciiValue = char.charCodeAt(0);
      // Check if the character is a letter (ignoring spaces, punctuation, etc.)
      if (/[a-zA-Z]/.test(char)) {
        return asciiValue % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      } else {
        return char; // Leave non-letter characters unchanged
      }
    }).join('');
}
// --------------------------------------------------------------------------------------
// 4.Question)=> Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

// Examples
console.log(hashPlusCount("###+")) //➞ [3, 1]

console.log(hashPlusCount("##+++#")) //➞ [3, 3]

console.log(hashPlusCount("#+++#+#++#")) //➞ [4, 6]

console.log(hashPlusCount("")) //➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
function hashPlusCount(str){
    let res = [0,0]
    for(let i = 0 ; i < str.length ; i++){
        str[i] == "#" ? res[0]++ : res[1]++
    }
    return res
}

function hashPlusCount(str){
    let arr = str.split("");
    let res = arr.reduce((acc,char)=>{
        if(char == "#") acc[0]++
        if(char == "+") acc[1]++
        return acc
    },[0,0])
    return res
}
