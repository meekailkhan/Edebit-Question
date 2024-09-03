// 9.Question)=> Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples
// console.log(moodToday("happy")) //➞ "Today, I am feeling happy"

// console.log(moodToday("sad")) //➞ "Today, I am feeling sad"

// console.log(moodToday()) //➞ "Today, I am feeling neutral"
// Notes
// Check the Resources tab for some helpful information.

function moodToday(mood="neutral"){
    return `Today, I am feeling ${mood}`
}
// --------------------------------------------------------------------------------------------------
// 10.Question)=> Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
// console.log(reverseCase("Happy Birthday")) //➞ "hAPPY bIRTHDAY"

// console.log(reverseCase("MANY THANKS")) //➞ "many thanks"

// console.log(reverseCase("sPoNtAnEoUs")) //➞ "SpOnTaNeOuS"
// Notes
// N/A
function reverseCase(str){
    let res = "";
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == str[i].toUpperCase()){
            res += str[i].toLowerCase() 
        }else{
            res += str[i].toUpperCase()
        }
    }
    return res
}
function reverseCase(str){
    let arr = str.split("")
    let result = ""
    let res = arr.map(item => item == item.toUpperCase() ? item.toLowerCase() : item.toUpperCase());
    return res.join("")
}

function reverseCase(str){
    let arr = str.split("")
    let res =  arr.reduce((acc,char)=>{
        return acc + (char == char.toUpperCase() ? char.toLowerCase(): char.toUpperCase())
    },"")
    return res
}

function reverseCase(str){
    if(str === ""){return ""}
    let firstChar = str[0];
    let reverseChar = firstChar == firstChar.toUpperCase() ? firstChar.toLowerCase() : firstChar.toUpperCase();
    return reverseChar + reverseCase(str.slice(1))
}
function reverseCase(str){
    return str.replace(/./g,char => char == char.toUpperCase() ? char.toLowerCase():char.toUpperCase())
}
// ---------------------------------------------------------------------------------------------
// 11.Question)=> Create a function that returns the number of hashes and pluses in a string.

// Examples
// console.log(hashPlusCount("###+")) //➞ [3, 1]

// console.log(hashPlusCount("##+++#")) //➞ [3, 3]

// console.log(hashPlusCount("#+++#+#++#")) //➞ [4, 6]

// console.log(hashPlusCount("")) //➞ [0, 0]
// Notes
// Return [0, 0] for an empty string.
// Return in the order of [hashes, pluses].
function hashPlusCount(str){
    let hash = 0;
    let plus = 0;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == "+"){
            plus++
        }else if(str[i] == "#"){
            hash++
        }
    }
    return [hash,plus]
}
function hashPlusCount(str){
    let [hash,plus] = [0,0]
    let arr = str.split("");
    arr.map(item => item == "#" ? hash++ : plus++);
    return [hash,plus]
}

function hashPlusCount(str){
    let hash = str.split("#").length-1;
    let plus = str.split("+").length-1;

    return [hash,plus]
}

function hashPlusCount(str){
    let res = str.split("").reduce((acc,char)=>{
        if(char == "#") acc[0]++;
        if(char == "+") acc[1]++;
        return acc
    },[0,0])

    return res
}
// ---------------------------------------------------------------------------------
// 12.Question)=> Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

// Examples
// console.log(bomb("There is a bomb.")) //➞ "Duck!!!"

// console.log(bomb("Hey, did you think there is a bomb?")) //➞ "Duck!!!"

// console.log(bomb("This goes boom!!!")) //➞ "There is no bomb, relax."
// // Notes
// "bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
function bomb(str){
    let arr = str.split("bomb");
    if(arr.length > 1){
        return "Duck!!!"
    }else{
        return "There is no bomb, relax."
    }
}

function bomb(str){
    if(str.includes("bomb")){
        return "Duck!!!"
    }else{
        return "There is no bomb, relax."
    }
}
// ---------------------------------------------------------------------
// 13.Question)=> Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

// Examples
// console.log(repetition("ab", 3)) //➞ "ababab"

// console.log(repetition("kiwi", 1)) //➞ "kiwi"

// console.log(repetition("cherry", 2)) //➞ "cherrycherry"
// Notes
// The second parameter of the function is positive integer.
function repetition(str,char){
    if(char == 0) return ""
    let res = "";
    res += str;
    return res+repetition(str,char-1)
}
function repetition(str,char){
    let res = "";
    for(let i = 0 ; i < char ; i++){
        res += str
    }
    return res
}

function repetition(str,char){
    return str.repeat(char)
}
// -------------------------------------------------------------------------------------------
// 14.Question)=> Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.
// Examples
console.log(isValid("59001")) //➞ true

console.log(isValid("853a7")) //➞ false

console.log(isValid("732 32")) //➞ false

console.log(isValid("393939")) //➞ false
// Notes
// N/A
function isValid(str){
    if(str.length <= 5){
        if(isNaN(str)){
            return false
        }else{
            return true
        }
    }
    return false
}
function isValid(str){
    return str.length === 5 && str.split("").every(char => !isNaN(char))
}

function isValid(str){
    if(str.length !== 5){
        return false
    }
    for(let i = 0 ; i < str.length ; i++){
        if(isNaN(str[i]) || str[i] == " "){
            return false
        }
    }
    return true
}

