// 1.Question)=> Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// console.log(charCount("a", "edabit")) //➞ 1

// console.log(charCount("c", "Chamber of secrets")) //➞ 1

// console.log(charCount("b", "big fat bubble")) //➞ 4
// Notes
// Your output must be case-sensitive (see second example).
function charCount(char,str){
    let res = 0;
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == char){
            res++
        }
    }
    return res
}
function charCount(char,str){
    let res = str.split("").filter(c => c == char).length
    return res
}
function charCount(char,str){
    let res = str.split(char).length-1
    return res
}
function charCount(char,str){
    let res = str.split("").reduce((count,currentChar)=>{
        return currentChar == char ? count + 1 : count
    },0)
    return res
}
// ---------------------------------------------------------------------------------------------------------
// 2.Question)=> Create a function to return the amount of potatoes there are in a string.

// Examples
// console.log(potatoes("potato")) //➞ 1

// console.log(potatoes("potatopotato")) //➞ 2

// console.log(potatoes("potatoapple")) //➞ 1
// Notes
// N/A
function potatoes(str){
    return str.split("potato").length-1
}
function potatoes(str){
    let res = str.match(/potato/g)
    return res.length
}
function potatoes(str){
    let res = str.split("").reduce((count, _, i, arr)=>{
        if(arr.slice(i,i+6).join("")=="potato"){
            count++
        }
        return count
    },0)
    return res
}
// -------------------------------------------------------------------------------------------
// 3.Question)=> A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples
// console.log(detectWord("UcUNFYGaFYFYGtNUH")) //➞ "cat"

// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")) //➞ "burglar"

// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")) //➞ "embezzlement"
// Notes
// N/A
function detectWord(str){
    let res = "";
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == str[i].toLowerCase()){
            res += str[i]
        }
    }
    return res
}
function detectWord(str){
    let res = ""
    for(let i = 0 ; i < str.length ; i++){
        if(str[i]>="a" && str[i]<="z"){
            res += str[i]
        }
    }
    return res
}
// ------------------------------------------------------------------------------------------------
// 4.Question)=> When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// console.log(fixImport("import object from module_name")) //➞ "from module_name import object"

// console.log(fixImport("import randint from random")) //➞ "from random import randint"

// console.log(fixImport("import pi from math")) //➞ "from math import pi"
// Notes
// All Tests will be valid strings.
function fixImport(str){
    let parts = str.split(" ");
    let res = `from ${parts[3]} import ${parts[1]}`
    return res
}
// ------------------------------------------------------------------------------------------------------------------
// 5.Question)=> Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

// Examples
// console.log(error(1)) //➞ "Check the fan: e1"

// console.log(error(2)) //➞ "Emergency stop: e2"

// console.log(error(3)) //➞ "Pump Error: e3"
// Notes
// Do this without using the switch or if statements.
function error(key){
    let obj = {
        "1": "Check the fan: e1",
        "2": "Emergency stop: e2",
        "3": "Pump Error: e3",
        "4": "c: e4",
        "5": "Temperature Sensor Error: e5"
    }
    return obj[key]
}
// -----------------------------------------------------------------------------------------------------------------
// 6.Question)=> Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// console.log(doubleChar("String")) //➞ "SSttrriinngg"

// console.log(doubleChar("Hello World!")) //➞ "HHeelllloo  WWoorrlldd!!"

// console.log(doubleChar("1234!_ ")) //➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.
function doubleChar(str){
    let res = "";
    for(let i = 0 ; i < str.length ; i++){
        res += str[i]+str[i]
    }
    return res
}
// ------------------------------------------------------------------------------------------------
// 7.Question)=> Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P
// Examples
// console.log(emotify("Make me smile")) //➞ "Make me :D"

// console.log(emotify("Make me grin")) //➞ "Make me :)"

// console.log(emotify("Make me sad")) //➞ "Make me :("
// Notes
// The sentence always starts with "Make me".
// Try to solve this without using conditional statements like if/else or switch.
function emotify(sentence){
    const imotion = {
        "smile" : ":D",
        "grin" : ":)",
        "sad" : ":(",
        "mad" : ":P"
    }

    let word = sentence.split(" ");
    let lastWord = word[word.length-1];
    if(imotion[lastWord]){
        word[word.length-1] = imotion[lastWord]
    }

    return word.join(" ")
}

function emotify(sentence){
    let imotion = {
        "smile" : ":D",
        "grin" : ":)",
        "sad" : ":(",
        "mad" : ":P"
    }
    for(let word in  imotion){
        if(sentence.includes(word)){
            return sentence.replace(word,imotion[word])
        }
    }
    return sentence
}
// ----------------------------------------------------------------------------------------------------------
// 8.Questtion)=> Create a function that takes a string and returns the number (count) of vowels contained within it.

// Examples
console.log(countVowels("Celebration")) //➞ 5

console.log(countVowels("Palm")) //➞ 1

console.log(countVowels("Prediction")) //➞ 4
// Notes
// a, e, i, o, u are considered vowels (not y).
// All test cases are one word and only contain letters.
function countVowels(str){
    
    let vowels = ["a","e","i","o","u"]
    let res = 0 ;
    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i])){
            res++
        }
    }
    return res
}
function countVowels(str){
    let vowels = "aeiouAEIOU";
    return str.split("").reduce((count,char)=>{
        return vowels.includes(char) ? count + 1 : count
    },0)
}

function countVowels(str){
    let vowels = "aeiouAEIOU";
    return str.split("").filter(item => vowels.includes(item)).length
}
function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
function countVowels(str){
    let vowels = "aeiouAEIOU";
    let count = 0;
    for(index in str){
        if(vowels.includes(str[index])){
            count++
        }
    }
    return count
}