// // Question)=> Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// // Examples
// // checkSquareAndCube([4, 8]) ➞ true

// // checkSquareAndCube([16, 48]) ➞ false

// // checkSquareAndCube([9, 27]) ➞ true
// // Notes
// // Remember to return either true or false.
// // All arrays contain two positive numbers.
// // If you're stuck, check the Resources for a hint.
// // ans)=>

function checkSquareAndCube(arr) {
    if (Math.sqrt(arr[0]) ** 3 === arr[1]) {
        return true;
    }
    return false
}
// console.log(checkSquareAndCube([4, 8])) //➞ true
// console.log(checkSquareAndCube([16, 48])) //➞ false
// console.log(checkSquareAndCube([9, 27])) //➞ true
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
// Notes
// N/A
function length(str) {
    let lastIndex;
    for (let i = 0; str[i]; i++) {
        lastIndex = i + 1
    }
    return lastIndex
}
// console.log(length("Hello World")) //➞ 11
// console.log(length("Edabit")) //➞ 6
// console.log(length("wash your hands!")) //➞ 16
// ------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.
function halfQuarterEighth(num) {
    let half = num / 2;
    let quarter = half / 2;
    let eighth = quarter / 2;
    return [half, quarter, eighth];
}
// console.log(halfQuarterEighth(6)) //➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)) //➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)) //➞ [12.5, 6.25, 3.125]
// --------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"
function nSidedShape(n) {
    let arr = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    return arr[n - 1]
}
// console.log(nSidedShape(3)) //➞ "triangle"
// console.log(nSidedShape(1)) //➞ "circle"
// console.log(nSidedShape(9)) //➞ "nonagon"
// ------------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
// Notes
// No test case will contain punctuation.
// Arrays can be of various lengths.
function eachLength(str) {
    return str.length
}

function wordLengths(arr) {
    let lengthArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengthArr.push(eachLength(arr[i]))
    }
    return lengthArr;
}
function wordLengths(arr) {
    return arr.map(item => item = item.length)
}
function wordLengths(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length
    }
    return arr;
}

// console.log(wordLengths(["hello", "world"])) //➞ [5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) //➞ [9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) //➞ [3, 5, 9, 4, 2, 3, 8]
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.
function toNumberArray(arr) {
    return arr.map(item => item = +item)
}

function toNumberArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    return arr;
}

// console.log(toNumberArray(["9.4", "4.2"])) //➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])) //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])) //➞ [9.5, 8.8]
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
// Notes
// You'll only get numbers in the array.

function addIndexes(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + i
    }
    return arr;
}

function addIndexes(arr) {
    return arr.map((item, index) => item = item + index)
}

// console.log(addIndexes([0, 0, 0, 0, 0])) //➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])) //➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])) //➞ [5, 5, 5, 5, 5]
// --------------------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.

function sumFive(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            res += arr[i]
        }
    }
    return res;
}

function sumFive(arr) {
    let res = 0;
    arr.map(item => item > 5 ? res += item : res)
    return res;
}

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) //➞ 77
// console.log(sumFive([1, 2, 3, 4])) //➞ 0
// console.log(sumFive([10, 12, 28, 47, 55, 100])) //➞ 252
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]

// integerBoolean("10") ➞ [true, false]

// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 only.
function integerBoolean(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        str[i] == 1 ? res.push(true) : res.push(false);
    }
    return res;
}
function integerBoolean(number) {
    return number.split("").map(digit => parseInt(digit) === 1);
}
// console.log(integerBoolean("100101")) //➞ [true, false, false, true, false, true]
// console.log(integerBoolean("10")) //➞ [true, false]
// console.log(integerBoolean("001")) //➞ [false, false, true]
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// ]
// Notes
// You can set a value for the parameter when creating the function e.g. function (x = 3)

function eachContains(quantity, word) {
    let str = "";
    for (let i = 0; i < quantity; i++) {
        str += word
    }
    return str
}

function makeRug(height, width, contain = "#") {
    let res = [];
    for (let i = 0; i < height; i++) {
        res.push(eachContains(width, contain))
    }
    return res;
}

// console.log(makeRug(3, 5))// ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// console.log(makeRug(3, 5, '$')) // ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// console.log(makeRug(2, 2, 'A')) // ➞ [
//   "AA",
//   "AA"
// ]
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27
// Notes
// All test inputs will be positive integers
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function calculateExponent(num, power) {
    return num ** power
}

// console.log(calculateExponent(5, 5)) //➞ 3125
// console.log(calculateExponent(10, 10)) //➞ 10000000000
// console.log(calculateExponent(3, 3)) //➞ 27
// ----------------------------------------------------------------------------------------------------------------
// Question)=> However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

// Examples
// leapYear(2020) ➞ true

// leapYear(2021) ➞ false

// leapYear(1968) ➞ true
// Notes
// N/A
function leapYear(year) {
    return year % 4 === 0 ? true : false;
}
// console.log(leapYear(2020)) //➞ true
// console.log(leapYear(2021)) //➞ false
// console.log(leapYear(1968)) //➞ true
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
// largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

// largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

// largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

// largestNumbers(0, [1, 3, 4, 2]) ➞ []
// Notes
// The returned array must be sorted in ascending order.
function largestNumbers(posi, arr) {
    let res = arr.sort((a, b) => a - b);
    let array = [];
    for (let i = arr.length - posi; i < arr.length; i++) {
        array.push(arr[i])
    }
    return array
}
function largestNumbers(posi, arr) {
    let res = arr.sort((a, b) => b - a);
    let largest = res.slice(0, posi);
    return largest.sort((a, b) => a - b)
}
// console.log(largestNumbers(2, [4, 3, 2, 1])) //➞ [3, 4]
// console.log(largestNumbers(1, [7, 19, 4, 2])) //➞ [19]
// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) //➞ [16, 18, 57]
// console.log(largestNumbers(0, [1, 3, 4, 2])) //➞ []
// ---------------------------------------------------------------------------------------------------------------------
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) ➞ 26

// // minimum value of the first row is 1
// // minimum value of the second row is 5
// // minimum value of the third row is 20
// Notes
// N/A

function smallest(arr) {
    let res = arr.sort((a, b) => a - b)
    return res[0]
}

function sumMinimums(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += smallest(arr[i]);
    }
    return res;
}
// console.log(sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ])) //➞ 26
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns the last value of the last item in an array or string.

// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2

// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"

// lastItem([]) ➞ undefined
// Notes
// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.

function lastItem(value) {
    return value[value.length - 1]
}
// console.log(lastItem([0, 4, 19, 34, 50, -9, 2])) //➞ 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog")) //➞ "g"
// console.log(lastItem([])) //➞ undefined
// -------------------------------------------------------------------------------------------------------------
// Question)=> You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// console.log(points(1, 1)) //➞ 5

// console.log(points(7, 5)) //➞ 29

// console.log(points(38, 8)) //➞ 100
// Notes
// N/A
function points(num1, num2) {
    return num1 * 2 + num2 * 3
}
// ---------------------------------------------------------------------------------------------------------------------------
// Question=> Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// console.log(lessThan100(22, 15)) //➞ true
// // // 22 + 15 = 37

// console.log(lessThan100(83, 34)) //➞ false
// // // 83 + 34 = 117

// console.log(lessThan100(3, 77)) //➞ true
// Notes
// N/A
function lessThan100(num1, num2) {
    return num1 + num2 < 100 ? true : false;
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// Examples
// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])) //➞ [1, 1, 2, 1, 3, 0, 0]

// console.log(moveZeros([0, 1, null, 2, false, 1, 0])) //➞ [1, null, 2, false, 1, 0, 0]

// console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) //➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function moveZeros(arr) {
    let res = [];
    arr.map(item => item !== 0 ? res.unshift(item) : res.push(item))
    return res;
}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// console.log(rangeOfNum(2, 4)) //➞ [3]

// console.log(rangeOfNum(5, 9)) //➞ [6, 7, 8]

// console.log(rangeOfNum(2, 11)) //➞ [3, 4, 5, 6, 7, 8, 9, 10]
// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.
function rangeOfNum(start, end) {
    let res = [];
    for (let i = start + 1; i < end; i++) {
        res.push(i)
    }
    return res;
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Examples
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) //➞ false

// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])) //➞ true

// console.log(forbiddenLetter("m", [])) //➞ true
// Notes
// All inputs given will be in lowercase.
// You will always be given a forbidden letter, but there may be empty arrays.
function forbiddenLetter(letter, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(letter)) {
            return false
        }
    }
    return true
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// // Examples
// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ])) //➞ 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ])) //➞ 16

// console.log(countCharacters([
//   "------------------"
// ])) //➞ 18

// console.log(countCharacters([])) //➞ 0

// console.log(countCharacters(["", ""])) //➞ 0
// // Notes
// // Return 0 if the given array is empty.
function countCharacters(arr) {
    let res = 0;
    arr.map(item => res += item.length)
    return res;
}
function countCharacters(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].length
    }
    return res;
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// // Examples
// console.log(stringPairs("mubashir")) //➞ ["mu", "ba", "sh", "ir"]

// console.log(stringPairs("edabit")) //➞ ["ed", "ab", "it"]

// console.log(stringPairs("airforces")) //➞ ["ai", "rf", "or", "ce", "s*"]
// // Notes
// Return [] if the given string is empty.


function stringPairs(str) {
    let res = [];
    for (let i = 1; i < str.length; i += 2) {
        res.push(str[i - 1] + str[i])
    }
    return res
}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]
// Examples
// console.log(oddSum([11, 15, 6, 8, 9, 10])) //➞ [true, false, true, false, false]

// console.log(oddSum([12, 21, 5, 9, 65, 32])) //➞ [false, true, true, true, false]

// console.log(oddSum([1, 2, 3, 4, 5, 6])) //➞ [false, false, false, false, false]
// Notes
// Remember that the length of all the arrays will be an even number, so it is not necessary to measure lengths.
function oddSum(arr) {
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let total = arr[i] + arr[i + 1]
        total % 2 == 0 ? res.push(true) : res.push(false);
    }
    return res
}
function oddSum(arr) {
    let res = [];
    arr.map((item, index) => {
        let total = item + arr[index + 1];
        total % 2 == 0 ? res.push(true) : res.push(false)
    })
    res.pop();
    return res;
}
// ----------------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns true if two rooks can attack each other, and false otherwise.

// Examples
// console.log(canCapture(["A8", "E8"])) //➞ true

// console.log(canCapture(["A1", "B2"])) //➞ false

// console.log(canCapture(["H4", "H3"])) //➞ true

// console.log(canCapture(["F5", "C8"])) //➞ false
// Notes
// Assume no blocking pieces.
// Two rooks can attack each other if they share the same row (letter) or column (number).
function eachChar(char1, char2) {
    for (let i = 0; i < char1.length; i++) {
        if (char1[0] == char2[0] || char1[1] == char2[1]) {
            return true
        }
    }
    return false
}

function canCapture(arr) {
    return eachChar(arr[0], arr[1])
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// Examples
// console.log(countdown(5)) //➞ [5, 4, 3, 2, 1, 0]

// console.log(countdown(1)) //➞ [1, 0]

// console.log(countdown(0)) //➞ [0]
// Notes
// The argument will always be greater than or equal to zero.
function countdown(count){
    let res = [];
    for (let i = count ; i >= 0 ; i--){
        res.push(i)
    }
    return res;
}
function countdown(count) {
    return Array.from({ length: count + 1 }, (_, index) => count - index)
}
// ----------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// // Examples
// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21])) //➞ 82
// // // Smallest number is -50, biggest is 32.

// console.log(diffMaxMin([44, 32, 86, 19])) //➞ 67
// // Smallest number is 19, biggest is 86.
// Notes
// N/A

function diffMaxMin(arr){
    let min = arr[0];
    let max = arr[0]
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return max-min
}

function diffMaxMin(arr){
    let res = arr.sort((a,b)=>a-b);
    return arr[arr.length-1]-arr[0]
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// Examples
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W")) //➞ ["WordPress"]

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")) //➞ ["Drupal"]

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")) //➞ ["Drupal", "Joomla", "Magento", "WordPress"]
// Notes
// The given letter(s) are case sensitive and can be more than one.
// In the case of an empty string, return the entire array.
// A CMS is a Content Management System.
function cmsSelector(arr,pettern){
    if(pettern == ""){
        return arr.sort()
    }
    let filterArr = arr.filter(str => str.includes(pettern))
    return filterArr.sort()
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// // Examples
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])) //➞ 3

// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])) //➞ 2.5

// console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"])) //➞ 2
// Notes
// All the bottles will be shot down in all the tests.
function rogerShots(arr) {
    let time = 0;
    let bottlesShot = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Bang!") {
            time += 0.5;
            bottlesShot += 1;
        } else if (arr[i] === "BangBang!") {
            time += 0.5;
            bottlesShot += 2;
        }
    }

    return time;
}
// // --------------------------------------------------------------------------------------------------------------------------------
// Question)=> Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// // Examples
// console.log(determineLever(["e", "f", "l"])) //➞ "first class lever"

// console.log(determineLever(["e", "l", "f"])) //➞ "second class lever"

// console.log(determineLever(["f", "e", "l"])) //➞ "third class lever"
// // Notes
// A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.
function determineLever(arr){
    let lever = arr.indexOf("f");
    if(lever == 2){
        return "second class lever"
    }else if(lever == 1){
        return "first class lever"
    }else if(lever == 0){
        return "third class lever"
    }
}
function determineLever(arr){
    if(arr[2] == "f"){
        return "second class lever"
    }else if(arr[1] == "f"){
        return "first class lever"
    }else if(arr[0] == "f"){
        return "third class lever"
    }
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns the original value from a matrix with too many sub-arrays.

// Examples
// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])) //➞ 3

// console.log(deNest([[[[[[[true]]]]]]])) //➞ true

// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])) //➞ "edabit"
// Notes
// You only need to retrieve one element.
function deNest(arr){
    return arr.join()
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December
// Examples
// console.log(monthName(3)) //➞ "March"

// console.log(monthName(12)) //➞ "December"

// console.log(monthName(6)) //➞ "June"
// Notes
// You can expect only integers ranging from 1 to 12 as test input.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function monthName(num){
    let months = [
        '',
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    return months[num]
}
// -----------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
console.log(divisible([3, 2, 4, 2])) //➞ false

console.log(divisible([4, 2, 6])) //➞ true
// // 4 * 2 * 6 / (4 + 2 + 6)

console.log(divisible([3, 5, 1])) //➞ false
// Notes
// N/A
function divisible(arr){
    let num1 = 1;
    let num2 = 0;
    arr.map(item => num1 *= item)
    arr.map(item => num2 += item)
    return num1%num2 == 0 ? true : false
}
function divisible(arr){
    let num1 = 1;
    let num2 = 0;
    for(let i = 0;i<arr.length;i++){
        num1 *= arr[i];
        num2 += arr[i]
    }
    return num1%num2 == 0 ? true : false
}