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
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])) //➞ [1, 1, 2, 1, 3, 0, 0]

console.log(moveZeros([0, 1, null, 2, false, 1, 0])) //➞ [1, null, 2, false, 1, 0, 0]

console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) //➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function moveZeros(arr){
    let res = [];
    arr.map(item => item!==0?res.unshift(item):res.push(item))
    return res;
}