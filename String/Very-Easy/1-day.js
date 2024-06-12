// Question)=> Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.
function giveMeSomething(str){
    return `something ${str}`
}
function giveMeSomething(str){
    return "something"+ str
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// console.log(nameString("Mubashir")) //➞ "MubashirEdabit"

// console.log(nameString("Matt")) //➞ "MattEdabit"

// console.log(nameString("javaScript")) //➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function nameString(str){
    return `${str}Edabit`
}
function nameString(str){
    return str+"Edabit"
}
function nameString(str){
    return str.concat("Edabit")
}
// -----------------------------------------------------------------------------------------------------------------
// Queestion)=> Create a function that takes a boolean variable flag and returns it as a string.

// // Examples
// console.log(boolToString(true)) //➞ "true"

// console.log(boolToString(false)) //➞ "false"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function boolToString(bool){
    return String(bool)
}
function boolToString(bool){
    return `${bool}`
}
function boolToString(bool){
    return "".concat(bool)
}
function boolToString(bool){
    return bool+""
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
// console.log(calculator("23+4")) //➞ 27

// console.log(calculator("45-15")) //➞ 30

// console.log(calculator("13+2-5*2")) //➞ 5

// console.log(calculator("49/7*2-3")) //➞ 11
// Notes
// There will be no brackets in the input line.
// No need to calculate mathematical functions (sin, cos, ln...).
// There are no gaps in the expression.
function calculator(str){
    return eval(str)
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

// Examples
// console.log(greeting("Matt")) //➞ "Hello, Matt!"

// console.log(greeting("Helen")) //➞ "Hello, Helen!"

// console.log(greeting("Mubashir")) //➞ "Hello, my Love!"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
function greeting(str){
    if(str == "Mubashir"){
        return `Hello, my Love!`
    }
    return `Hello, ${str}!`
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given a string, return true if its length is even or false if the length is odd.

// Examples
// console.log(oddOrEven("apples")) //➞ true
// // // The word "apples" has 6 characters.
// // // 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears")) //➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// oddOrEven("cherry") ➞ true
// Notes
// N/A
function oddOrEven(str){
    return str.length % 2 === 0 ? true : false;
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// Examples:
// console.log(intToString(4)) //➞ "4"

// console.log(stringToInt("4")) //➞ 4

// console.log(intToString(29348)) //➞ "29348"
// Notes
// You will get bonus points if you manage to solve this without using toString, parseInt or parseFloat.
function intToString(num) {
    return num+""
}
function stringToInt(str){
    return +str
}
// ----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a word and returns the new word without including the first character.

// Examples
// console.log(newWord("apple")) //➞ "pple"

// console.log(newWord("cherry")) //➞ "herry"

// console.log(newWord("plum")) //➞ "lum"
// // Notes
// The input is always a valid word.
function newWord(str){
    return str.slice(1)
}
function newWord(str){
    let res = "";
    for(let i = 1 ; i < str.length ; i++){
        res += str[i]
    }
    return res
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// // Examples
// console.log(helloName("Gerald")) //➞ "Hello Gerald!"

// console.log(helloName("Tiffany")) //➞ "Hello Tiffany!"

// console.log(helloName("Ed")) //➞ "Hello Ed!"
// // Notes
// The input is always a name (as string).
// Don't forget the exclamation mark!
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function helloName(str){
    return `Hello ${str}!`
}
function helloName(str){
    return "Hello "+str+"!"
}
function helloName(str){
    return "Hello ".concat(`${str}!`)
}
// ------------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of numbers or letters and returns a string.

// Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"

// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"

// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) //➞ "123asdAAAA"
// // Notes
// N/A
function arrayToString(arr){
    return arr.join("")
}
function arrayToString(arr){
    let res = ""
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i]
    }
    return res
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array and a string as arguments and returns the index of the string.

// // Examples
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) //➞ 2

// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) //➞ 1

// console.log(findIndex(["a", "g", "y", "d"], "d")) //➞ 3

// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) //➞ 0
// // Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.
function findIndex(arr,char){
    return arr.indexOf(char)
}
function findIndex(arr,char){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == char){
            return i
        }
    }
    return -1
}
function findIndex(arr,char){
    let res = -1;
    arr.map((item,index) => item == char ? res = index : item)
    return res
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// console.log(word("one")) //➞ 1

// console.log(word("two")) //➞ 2

// console.log(word("nine")) //➞ 9
// Notes
// All numbers will be single digit positive integers.
function word(str){
    let obj = {
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
        "ten" : 10
    }
    return obj[str]
}
function word(str){
    switch(str){
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight":
            return 8;
        case "nine":
            return 9;
        case "ten":
            return 10;
        default:
            throw new Error("invalid input number")
    }
}
// ------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns true if a string contains any spaces.

    // // Examples
    // console.log(hasSpaces("hello")) //➞ false

    // console.log(hasSpaces("hello, world")) //➞ true

    // console.log(hasSpaces(" ")) //➞ true

    // console.log(hasSpaces("")) //➞ false

    // console.log(hasSpaces(",./!@#")) //➞ false
// Notes
// An empty string does not contain any spaces.
// Try doing this without RegEx.
function hasSpaces(str){
    return str.includes(" ") ? true : false;
}
function hasSpaces(str){
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == " "){
            return true
        }
    }
    return false
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
// console.log(isLastCharacterN("Aiden")) //➞ true

// console.log(isLastCharacterN("Piet")) //➞ false

// console.log(isLastCharacterN("Bert")) //➞ false

// console.log(isLastCharacterN("Dean")) //➞ true
// Notes
// The function must return a boolean value ( i.e. true or false).
function isLastCharacterN(str){
    return str[str.length-1] === "n" ? true : false;
}
// ---------------------------------------------------------------------------------------------------------------
// Questoion)=> Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Example
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."

// relationToLuke("Leia") ➞ "Luke, I am your sister."

// relationToLuke("Han") ➞ "Luke, I am your brother in law."
// Notes
// N/A
function relationToLuke(str){
    switch(str){
        case "Darth Vader" :
            return "Luke, I am your father.";
        case "Leia" :
            return "Luke, I am your sister.";
        case "Han" :
            return "Luke, I am your brother in law.";
        case "R2D2" :
            return "Luke, I am your droid"
    }
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// Examples
// console.log(frontThree("Python")) //➞ "PytPytPyt"

// console.log(frontThree("Cucumber")) //➞ "CucCucCuc"

// console.log(frontThree("bioshock")) //➞ "biobiobio"
// Notes
// Don't forget to return the result.

function frontThree(str){
    let res = "";
    for(let i = 0 ; i < 3 ; i++){
        res += str.slice(0,3)
    }
    return res
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// // Examples
// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// })) //➞ "Paris has a population of 2,140,526 and is situated in Europe"

// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// })) //➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
// Notes
// Don't add a period at the end.
function cityFacts(obj){
    return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// Examples
// console.log(isPlural("changes")) //➞ true

// console.log(isPlural("change")) //➞ false

// console.log(isPlural("dudes")) //➞ true

// console.log(isPlural("magic")) //➞ false
// Notes
// Don't forget to return the result.
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function isPlural(str){
    return str[str.length-1] === "s" ? true : false;
}
function isPlural(str){
    return str.slice(-1 ) === "s" ? true : false;
}

// ------------------------------------------------------------------------------------------------------------------
// Create a function that takes a string and returns the concatenated first and last character.

// Examples
// console.log(firstLast("ganesh")) //➞ "gh"

// console.log(firstLast("kali")) //➞ "ki"

// console.log(firstLast("shiva")) //➞ "sa"

// console.log(firstLast("vishnu")) //➞ "vu"

// console.log(firstLast("durga")) //➞ "da"
// Notes
// There is no empty string.
function firstLast(str){
    return `${str[0]}${str.slice(-1)}`
}
// ---------------------------------------------------------------------------------------------------------------------
//  Questin)=> Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// console.log(toNumberArray(["9.4", "4.2"])) //➞ [9.4, 4.2]

// console.log(toNumberArray(["91", "44"])) //➞ [91, 44]

// console.log(toNumberArray(["9.5", "8.8"])) //➞ [9.5, 8.8]
// Notes
// Some inputs are floats.
function toNumberArray(arr){
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = Number(arr[i])
    }
    return arr
}
function toNumberArray(arr){
    return arr.map(item => item = Number(item))
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// Examples
// console.log(greaterThanOne("1/2")) //➞ false

// console.log(greaterThanOne("7/4")) //➞ true

// console.log(greaterThanOne("10/10")) //➞ false
// Notes
// Fractions must be strictly greater than 1 (see example #3).
function greaterThanOne(str){
    return eval(str) > 1 ? true : false ;
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples
// console.log(moodToday("happy")) //➞ "Today, I am feeling happy"

// console.log(moodToday("sad")) //➞ "Today, I am feeling sad"

// console.log(moodToday()) //➞ "Today, I am feeling neutral"
// Notes
// Check the Resources tab for some helpful information.
function moodToday(mood = "neutral"){
    return `Today, I am feeling ${mood}`
}
function moodToday(mood = 'neutral'){
    return "Today, I am feeling " + mood
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
// console.log(countSyllables("Hehehehehehe")) //➞ 6

// console.log(countSyllables("bobobobobobobobo")) //➞ 8

// console.log(countSyllables("NANANA")) //➞ 3
// Notes
// For simplicity, please note that each syllable will consist of two letters only.
// Your code should accept strings of any case (upper, lower and mixed case).
function countSyllables(str){
    return str.length/2
}
// -------------------------------------------------------------------------------------------------------------------
// Create a function that returns the ASCII value of the passed in character.

// Examples
// console.log(ctoa("A")) //➞ 65

// console.log(ctoa("m")) //➞ 109

// console.log(ctoa("[")) //➞ 91

// console.log(ctoa("/")) //➞ 47
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function ctoa(char){
    return char.charCodeAt(0);
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// Examples
console.log(reversePsychology("wash the dishes")) //➞ "Do not wash the dishes."

console.log(reversePsychology("eat your lunch")) //➞ "Do not eat your lunch."

console.log(reversePsychology("go to school")) //➞ "Do not go to school."

console.log(reversePsychology())
// Notes
// Are available.
function reversePsychology(str){
    return "Do not ".concat(str)
}
function reversePsychology(str){
    return `Do not ${str}`
}
function reversePsychology(str = "do anything"){
    return "Do not "+str
}