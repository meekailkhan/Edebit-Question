// Question)=> Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.
function giveMeSomething(str) {
    return `something ${str}`
}
function giveMeSomething(str) {
    return "something" + str
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
function nameString(str) {
    return `${str}Edabit`
}
function nameString(str) {
    return str + "Edabit"
}
function nameString(str) {
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
function boolToString(bool) {
    return String(bool)
}
function boolToString(bool) {
    return `${bool}`
}
function boolToString(bool) {
    return "".concat(bool)
}
function boolToString(bool) {
    return bool + ""
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
function calculator(str) {
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
function greeting(str) {
    if (str == "Mubashir") {
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
function oddOrEven(str) {
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
    return num + ""
}
function stringToInt(str) {
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
function newWord(str) {
    return str.slice(1)
}
function newWord(str) {
    let res = "";
    for (let i = 1; i < str.length; i++) {
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
function helloName(str) {
    return `Hello ${str}!`
}
function helloName(str) {
    return "Hello " + str + "!"
}
function helloName(str) {
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
function arrayToString(arr) {
    return arr.join("")
}
function arrayToString(arr) {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
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
function findIndex(arr, char) {
    return arr.indexOf(char)
}
function findIndex(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == char) {
            return i
        }
    }
    return -1
}
function findIndex(arr, char) {
    let res = -1;
    arr.map((item, index) => item == char ? res = index : item)
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
function word(str) {
    let obj = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10
    }
    return obj[str]
}
function word(str) {
    switch (str) {
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
function hasSpaces(str) {
    return str.includes(" ") ? true : false;
}
function hasSpaces(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
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
function isLastCharacterN(str) {
    return str[str.length - 1] === "n" ? true : false;
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
function relationToLuke(str) {
    switch (str) {
        case "Darth Vader":
            return "Luke, I am your father.";
        case "Leia":
            return "Luke, I am your sister.";
        case "Han":
            return "Luke, I am your brother in law.";
        case "R2D2":
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

function frontThree(str) {
    let res = "";
    for (let i = 0; i < 3; i++) {
        res += str.slice(0, 3)
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
function cityFacts(obj) {
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
function isPlural(str) {
    return str[str.length - 1] === "s" ? true : false;
}
function isPlural(str) {
    return str.slice(-1) === "s" ? true : false;
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
function firstLast(str) {
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
function toNumberArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
    }
    return arr
}
function toNumberArray(arr) {
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
function greaterThanOne(str) {
    return eval(str) > 1 ? true : false;
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// Examples
// console.log(moodToday("happy")) //➞ "Today, I am feeling happy"

// console.log(moodToday("sad")) //➞ "Today, I am feeling sad"

// console.log(moodToday()) //➞ "Today, I am feeling neutral"
// Notes
// Check the Resources tab for some helpful information.
function moodToday(mood = "neutral") {
    return `Today, I am feeling ${mood}`
}
function moodToday(mood = 'neutral') {
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
function countSyllables(str) {
    return str.length / 2
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
function ctoa(char) {
    return char.charCodeAt(0);
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// Examples
// console.log(reversePsychology("wash the dishes")) //➞ "Do not wash the dishes."

// console.log(reversePsychology("eat your lunch")) //➞ "Do not eat your lunch."

// console.log(reversePsychology("go to school")) //➞ "Do not go to school."

// console.log(reversePsychology())
// Notes
// Are available.
function reversePsychology(str) {
    return "Do not ".concat(str)
}
function reversePsychology(str) {
    return `Do not ${str}`
}
function reversePsychology(str = "do anything") {
    return "Do not " + str
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

// Examples
// console.log(repeatString("Mubashir", 2)) //➞ "MubashirMubashir"

// console.log(repeatString("Matt", 3)) //➞ "MattMattMatt"

// console.log(repeatString(1990, 7)) //➞ "Not A String !!"
// // Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function repeatString(str, rTime) {
    if (typeof str !== "string") {
        return "Not A String !!"
    }
    let res = "";
    for (let i = 0; i < rTime; i++) {
        res += str
    }
    return res
}
function repeatString(str, rTime) {
    if (typeof str !== "string") {
        return "Not A String !!"
    }
    for (let i = 1; i < rTime; i++) {
        str += str
    }
    return str
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
// console.log(match("hello", "hELLo")) //➞ true

// console.log(match("motive", "emotive")) //➞ false

// console.log(match("venom", "VENOM")) //➞ true

// console.log(match("mask", "mAskinG")) //➞ false
function match(str1, str2) {
    let a = str1.toUpperCase()
    let b = str2.toUpperCase()
    return a == b ? true : false
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

// // Examples
// console.log(intOrString(8)) //➞ "int"

// console.log(intOrString("Hello")) //➞ "str"

// console.log(intOrString(9843532)) //➞ "int"
// Notes
// Input will either be an integer or a string.
function intOrString(val) {
    if (typeof val == "string") {
        return "str"
    } else if (typeof val == "number") {
        return "int"
    }
}
// --------------------------------------------------------------------------------------------------------------
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

// Examples
// console.log(add("R", "javascript is fun")) //➞ "javascriptRisRfun"

// console.log(add("#", "hello world!")) //➞ "hello#world!"

// console.log(add("#", " ")) //➞ "#"
// Notes
// Make sure there are no spaces between words when returning the function.
function add(char, str) {
    let res = str.split(" ")
    return res.join(char)
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples
// console.log(countClaps("ClaClaClaClap!")) //➞ 4

// console.log(countClaps("ClClClaClaClaClap!")) //➞ 6

// console.log(countClaps("CCClaClClap!Clap!ClClClap!")) //➞ 9
// Notes
// Each clap starts with a capital "C".
function countClaps(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] == "C" ? res += 1 : i;
    }
    return res
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// Examples
// console.log(getCase("whisper...")) //➞ "lower"

// console.log(getCase("SHOUT!")) //➞ "upper"

// console.log(getCase("Indoor Voice")) //➞ "mixed"
// Notes
// Ignore punctuation, spaces and numbers.
function getCase(str) {
    if (str == str.toUpperCase()) {
        return "upper"
    } else if (str == str.toLowerCase()) {
        return "lower"
    } else {
        return "mixed"
    }
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples
// console.log(toInt("77")) //➞ 77

// console.log(toInt("532")) //➞ 532

// console.log(toStr(77)) //➞ "77"

// console.log(toStr(532)) //➞ "532"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function toInt(str) {
    return parseInt(str, 10);
}

function toStr(num) {
    return num.toString();
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

// Examples
// console.log(longBurp(3)) //➞ "Burrrp"

// console.log(longBurp(5)) //➞ "Burrrrrp"

// console.log(longBurp(9)) //➞ "Burrrrrrrrrp"
// Notes
// Expect num to always be >= 1.
// Remember to use a capital "B".
// Don't forget to return the result
function longBurp(n) {
    return `Bu${'r'.repeat(n)}p`
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// console.log(spaceMeOut("space")) //➞ "s p a c e"

// console.log(spaceMeOut("far out")) //➞ "f a r   o u t"

// console.log(spaceMeOut("elongated musk")) //➞ "e l o n g a t e d   m u s k"
// Notes
// Treat a space as its own character (i.e. leave three spaces between words).
function spaceMeOut(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        res += `${str[i]} `
    }
    return res
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function which makes the last character of a string repeat n number of times.

// Examples
// console.log(modifyLast("Hello", 3)) //➞ "Hellooo"

// console.log(modifyLast("hey", 6)) //➞ "heyyyyyy"

// console.log(modifyLast("excuse me what?", 5)) //➞ "excuse me what?????"
// Notes
// Tests will include numbers and punctuation.
// Make sure your code is not case sensitive.
function modifyLast(str, n) {
    return `${str}${str[str.length - 1].repeat(n - 1)}`
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// Examples
// console.log(amazingEdabit("edabit is amazing.")) //➞ "edabit is amazing."

// console.log(amazingEdabit("Mubashir is amazing.")) //➞ "Mubashir is not amazing."

// console.log(amazingEdabit("Infinity is amazing.")) //➞ "Infinity is not amazing."
// Notes
// Edabit is amazing :)
function amazingEdabit(str) {
    if (str.includes("edabit")) {
        return str
    } else {
        return str.replace("amazing", "not amzing")
    }
}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that counts how many D's are in a sentence.

// // Examples
// console.log(countDs("My friend Dylan got distracted in school.")) //➞ 4

// console.log(countDs("Debris was scattered all over the yard.")) //➞ 3

// console.log(countDs("The rodents hibernated in their den.")) //➞ 3
// Notes
// Your function must be case-insensitive.
// Remember to return the result.
// Check the Resources for help.
function countDs(str) {
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        str[i].toUpperCase() == "D" ? res++ : i
    }
    return res
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
// console.log(helloWorld(3)) //➞ "Hello"

// console.log(helloWorld(5)) //➞ "World"

// console.log(helloWorld(15)) //➞ "Hello World"
// Notes
// Don't forget to return the result.
function helloWorld(n) {
    let res = ""
    if (n % 3 === 0) {
        res += "Hello "
    }
    if (n % 5 === 0) {
        res += "World"
    }
    return res
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that flips M's to W's (all uppercase).

// Examples
// console.log(wumbo("I LOVE MAKING CHALLENGES")) //➞ "I LOVE WAKING CHALLENGES"

// console.log(wumbo("MEET ME IN WARSAW")) //➞ "WEET WE IN WARSAW"

// console.log(wumbo("WUMBOLOGY")) //➞ "WUWBOLOGY"
// Notes
// N/A
function wumbo(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "M") {
            res += "W"
        } else {
            res += str[i]
        }
    }
    return res
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// // Examples
// console.log(createID("mary", "lamb")) //➞ "mLam"

// console.log(createID("John", "SMITH")) //➞ "jSmi"

// console.log(createID("mary", "smith")) //➞ "mSmi"
// Notes
// There is always one character in the first name and at least three in the last name.
function createID(str1, str2) {
    let res = "";
    res += str1[0].toLowerCase();
    res += str2[0].toUpperCase();
    res += str2.slice(1, 3).toLowerCase()
    return res
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

// Examples
// console.log(toScottishScreaming("hello world")) //➞ "HELLE WERLD"

// console.log(toScottishScreaming("Mr. Fox was very naughty")) //➞ "MR. FEX WES VERY NEEGHTY"

// console.log(toScottishScreaming("Butterflies are beautiful!")) //➞ "BETTERFLEES ERE BEEETEFEL!"
// // Notes
// Make sure to include all punctuation that is in the original string.
// You don't need any more namespaces than are already given.
function toScottishScreaming(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            res += "e"
        } else {
            res += str[i]
        }
    }
    return res.toUpperCase()
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// console.log(filterArray([1, 2, 3, "a", "b", 4])) //➞ [1, 2, 3, 4]

// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])) //➞ [0, 1729]

// console.log(filterArray(["Nothing", "here"])) //➞ []
// Notes
// N/A
function filterArray(arr) {
    return arr.filter(item => typeof item == "number")
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

// Examples
// console.log(isBoiling("212F")) //➞ true

// console.log(isBoiling("100C")) //➞ true

// console.log(isBoiling("0F")) //➞ false
// Notes
// The boiling point of water is 212F in Fahrenheit and 100C in Celsius.
function isBoiling(str) {
    if (str == "212F" || str == "100C") {
        return true
    }
    return false
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=>
// console.log(height(2)) //➞ 17.3 mm

// console.log(height(5)) //➞ 43.3 mm

// console.log(height(6.2)) //➞ 53.7 mm
// Notes
// Return the answer rounded to one decimal place and in the format shown in the examples above.
function height(num) {
    let m = 8.67;
    let c = -0.04;
    let result = m * num + c;
    return result.toFixed(1) + " mm"
}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function based on the input and output. Look at the examples, there is a pattern.

// Examples
// console.log(secret("div*2")) //➞ "<div></div><div></div>"

// console.log(secret("p*1")) //➞ "<p></p>"

// console.log(secret("li*3")) //➞ "<li></li><li></li><li></li>"
// Notes
// Input is a string.
function secret(str) {
    let [tag, count] = str.split("*")

    let res = ""
    for (let i = 0; i < count; i++) {
        res += `<${tag}></${tag}>`
    }
    return res
}
// --------------------------------------------------------------------------------------------------------------
// Question)=> Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// // Examples
// console.log(removeNumbers("mubashir1")) //➞ "mubashir"

// console.log(removeNumbers("12ma23tt")) //➞ "matt"

// console.log(removeNumbers("e1d2a3b4i5t6")) //➞ "edabit"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
function removeNumbers(str) {
    return str.split("").filter(item => isNaN(item)).join("")
}
function removeNumbers(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            res += str[i]
        }
    }
    return res;
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// // Examples
// console.log(repeatSecond({ 1: "Mommy", 2: "please", 3: "help" })) //➞ "Mommy please help please"

// console.log(repeatSecond({ 1: "Me", 2: "innocent", 3: "is" })) //➞ "Me innocent is innocent"

// console.log(repeatSecond({ 1: "Must", 2: "lawyer", 3: "call" })) //➞ "Must lawyer call lawyer"
// Notes
// The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
// I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
// Check the Resources for tips if needed.
function repeatSecond(obj) {
    let values = Object.values(obj);
    let secondValue = values[1]
    let str = values.join();
    let res = str + " " + secondValue

    return res
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// console.log(integerBoolean("100101")) //➞ [true, false, false, true, false, true]

// console.log(integerBoolean("10")) //➞ [true, false]

// console.log(integerBoolean("001")) //➞ [false, false, true]
// // Notes
// Expect numbers with 0 and 1 only.
function integerBoolean(num) {
    let res = [];
    for (let i = 0; i < num.length; i++) {
        res.push(Boolean(parseInt(num[i])))
    }
    return res
}
function integerBoolean(num) {
    return num.split("").map(item => item = Boolean(parseInt(item)))
}
function integerBoolean(num) {
    return num.split("").map(item => item = Boolean(+item))
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes two numbers and a mathematical operator and returns the result.

// Examples
// console.log(calculate(4, 9, "+")) //➞ 13

// console.log(calculate(12, 5, "-")) //➞ 7

// console.log(calculate(6, 3, "*")) //➞ 18

// console.log(calculate(25, 5, "/")) //➞ 5

// console.log(calculate(14, 3, "%")) //➞ 2
// Notes
// Numbers can be negative.
// The only operations used are those in the examples above.
function calculate(num1, num2, opre) {
    return eval(`${num1}${opre}${num2}`)
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) //➞ false

// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])) //➞ true

// console.log(forbiddenLetter("m", [])) //➞ true
// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.
function forbiddenLetter(word, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(word)) {
            return false
        }
    }
    return true
}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

// Examples
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")) //➞ 2

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")) //➞ 1
// Notes
// If you only pay attention to the month and ignore the day, the challenge will become easier.
function uploadCount(arr, char) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(char)) {
            res++
        }
    }
    return res
}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Examples
// console.log(cleanUpArray(["8"])) //➞ [[8], []]

// console.log(cleanUpArray(["11"])) //➞ [[], [11]]

// console.log(cleanUpArray(["7", "4", "8"])) //➞ [[4, 8], [7]]

// console.log(cleanUpArray(["9", "4", "5", "8"])) //➞ [[4, 8], [9, 5]]
// Notes
// All numbers will be positive integers.
function cleanUpArray(arr) {
    let even = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(parseInt(arr[i]))
        } else {
            odd.push(parseInt(arr[i]))
        }
    }
    return [even, odd]
}
function cleanUpArray(arr) {
    let even = [];
    let odd = [];
    arr.map(item => item % 2 == 0 ? even.push(+item) : odd.push(+item))

    return [even, odd]
}
// ----------------------------------------------------------------------------------------------------------------------
// Question)=> Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Examples
// console.log(keyboardMistakes("MUB45H1R")) //➞ "MUBASHIR"

// console.log(keyboardMistakes("DUBL1N")) //➞ "DUBLIN"

// console.log(keyboardMistakes("51NG4P0RE")) //➞ "SINGAPORE"
// Notes
// N/A
function keyboardMistakes(str) {
    str = str.replace(/4/g, "A")
    str = str.replace(/5/g, "S")
    str = str.replace(/0/g, "O")
    str = str.replace(/1/g, "I")

    return str
}
// ---------------------------------------------------------------------------------------------------------------------
// Qusetion)=> In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// Examples
// console.log(arithmeticProgression(1, 2, 5)) //➞ "1, 3, 5, 7, 9"

// console.log(arithmeticProgression(1, 0, 5)) //➞ "1, 1, 1, 1, 1"

// console.log(arithmeticProgression(1, -3, 10)) //➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"
// Notes
// N/A
function arithmeticProgression(first, difference, n) {
    let res = `${first}, `
    for (let i = 1; i < n; i++) {
        first += difference
        res += `${first}, `
    }
    return res
}
// --------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns the last value of the last item in an array or string.

// Examples
// console.log(lastItem([0, 4, 19, 34, 50, -9, 2])) //➞ 2

// console.log(lastItem("The quick brown fox jumped over the lazy dog")) //➞ "g"

// console.log(lastItem([])) //➞ undefined
// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.
function lastItem(val) {
    return val[val.length - 1]
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
// console.log(evenOddString("mubashir")) //➞ "mbsi uahr"
// // // Letters at even indexes = "mbsi"
// // // Letters at odd indexes = "uahr"
// // // Join both strings with a space

// console.log(evenOddString("edabit")) //➞ "eai dbt"

// console.log(evenOddString("airforce")) //➞ "aroc ifre"
// Notes
// There will be no space in the given string.
function evenOddString(str) {
    let even = "";
    let odd = "";
    for (let i = 0; i < str.length; i++) {
        i % 2 == 0 ? even += str[i] : odd += str[i]
    }
    return `${even} ${odd}`
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples
// let = str1 = "mubashir"
// let = str2 = "edabit"

// console.log(longestString(str1, str2)) //➞ "abdehimrstu"
// // // Contains sorted and distinct letters of the given strings.

// str1 = "abcdefghijklmnopqrstuvwxyz"
// str2 = "abcdefghijklmnopqrstuvwxyz"

// console.log(longestString(str1, str2)) //➞ "abcdefghijklmnopqrstuvwxyz"
// // // Contains sorted and distinct letters of the given strings.
// Notes
// N/A
function longestString(str1, str2) {
    let combineStr = str1 + str2

    let uniqueStr = new Set(combineStr)
    let arr = Array.from(uniqueStr).sort()

    return arr.join("")
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// Examples
// console.log(countCharacters([
//     "###",
//     "###",
//     "###"
// ])) //➞ 9

// console.log(countCharacters([
//     "22222222",
//     "22222222",
// ])) //➞ 16

// console.log(countCharacters([
//     "------------------"
// ])) //➞ 18

// console.log(countCharacters([])) //➞ 0

// console.log(countCharacters(["", ""])) //➞ 0
// Notes
// Return 0 if the given array is empty.
function countCharacters(arr) {
    let res = 0;
    arr.map(item => res += item.length)
    return res
}
function countCharacters(arr) {
    return arr.reduce((acc, val) => acc + val.length, 0)
}
function itemLength(item){
    return item.length
}
function countCharacters(arr){
    let res = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        res += itemLength(arr[i])
    }
    return res
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

// // Examples
// console.log(showdown(
//   "   Bang!        ",
//   "        Bang!   "
// )) //➞ "p1"

// // p1 draws his gun sooner than p2

// console.log(showdown(
//   "               Bang! ",
//   "             Bang!   "
// )) //➞ "p2"

// console.log(showdown(
//   "     Bang!   ",
//   "     Bang!   "
// )) //➞ "tie"
// Notes
// Both strings are the same length.
function showdown(p1,p2){
    let p1Position = p1.indexOf("Bang!")
    let p2Position = p2.indexOf("Bang!")

    if(p1Position < p2Position){
        return "p1"
    }else if(p1Position > p2Position){
        return "p2"
    }else{
        return "tie"
    }
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// Examples
// console.log(stupidAddition(1, 2)) //➞ "12"

// console.log(stupidAddition("1", "2")) //➞ 3

// console.log(stupidAddition("1", 2)) //➞ null
// Notes
// If the two parameters are different data types, return null.
// All parameters will either be strings or integers.
function stupidAddition(num1,num2){
    if(typeof num1 == "string" && typeof num2 == "string"){
        return parseInt(num1) + parseInt(num2)
    }else if(typeof num1 == "number" && typeof num2 == "number"){
        return num1.toString() + num2.toString()
    }else{
        return null
    }
}
// ---------------------------------------------------------------------------------------------------------------------
// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

// Examples
console.log(profitMargin(50, 50)) //➞ "0.0%"

console.log(profitMargin(28, 39)) //➞ "28.2%"

console.log(profitMargin(33, 84)) //➞ "60.7%"
// Notes
// Remember to return the result as a percentage formatted string.
// Only one decimal should be included.
function profitMargin(costPrice,salesPrice){
    let margin = ((salesPrice - costPrice) / salesPrice)*100
    let fixedMargin = margin.toFixed(1)
    return `${fixedMargin}%`
}