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
console.log(hashPlusCount("###+")) //➞ [3, 1]

console.log(hashPlusCount("##+++#")) //➞ [3, 3]

console.log(hashPlusCount("#+++#+#++#")) //➞ [4, 6]

console.log(hashPlusCount("")) //➞ [0, 0]
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