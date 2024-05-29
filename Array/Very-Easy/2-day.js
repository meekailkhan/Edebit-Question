// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
// console.log(sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ])) //➞ 26

// // minimum value of the first row is 1
// // minimum value of the second row is 5
// // minimum value of the third row is 20
// Notes
// N/A

function iterator(arr) {
    // let res = arr.sort((a,b)=> a-b);
    let minimum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i]
        }
    }
    return minimum
}

function sumMinimums(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += iterator(arr[i])
    }
    return res;
}
// ---------------------------------------------------------------------------------------------------------------------------
// Question)=> Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// Examples
// console.log(unlucky13([53, 182, 435, 591, 637])) //➞ [53, 435, 591]
// // // 182 and 637 are divisible by 13.

// console.log(unlucky13([24, 316, 393, 458, 1279])) //➞ [24, 316, 393, 458, 1279]
// // // No numbers in the array are divisible by 13.

// console.log(unlucky13([104, 351, 455, 806, 871])) //➞ []
// // All numbers in the array are divisible by 13.
// Notes
// N/A
function unlucky13(arr) {
    let res = []
    arr.map((item) => {
        item % 13 !== 0 ? res.push(item) : item;
    })
    return res;
}
function unlucky13(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 13 !== 0 ? res.push(arr[i]) : arr[i];
    }
    return res;
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

// Examples
// console.log(divisible([3, 2, 4, 2])) //➞ false

// console.log(divisible([4, 2, 6])) //➞ true
// // // 4 * 2 * 6 / (4 + 2 + 6)

// console.log(divisible([3, 5, 1])) //➞ false
// Notes
// N/A
function divisible(arr) {
    let sum = 0;
    let product = 1;
    arr.map(item => product *= item)
    arr.map(item => sum += item);
    return product % sum == 0 ? true : false;
}
function divisible(arr) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        product *= arr[i]
    }
    return product % sum == 0 ? true : false;
}
function divisible(arr) {
    const product = arr.reduce((acc, val) => acc * val, 1);
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return product % sum === 0 ? true : false;
}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

// Examples
// console.log(findBob(["Jimmy", "Layla", "Bob"])) //➞ 2

// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])) //➞ 0

// console.log(findBob(["Jimmy", "Layla", "James"])) //➞ -1
// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").
function findBob(arr) {
    return arr.indexOf("Bob")
}
function findBob(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "Bob") {
            return i
        }
    }
    return -1
}
// ---------------------------------------------------------------------------------------------------------------------
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
        arr[i] % 2 == 0 ? even.push(+arr[i]) : odd.push(+arr[i])
    }
    return [even, odd]
}

function cleanUpArray(arr) {
    let even = [];
    let odd = [];
    arr.map(item => item % 2 == 0 ? even.push(+item) : odd.push(+item))
    return [even, odd]
}
// -----------------------------------------------------------------------------------------------------------------------
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// Examples
// console.log(largestNumbers(2, [4, 3, 2, 1])) //➞ [3, 4]

// console.log(largestNumbers(1, [7, 19, 4, 2])) //➞ [19]

// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])) //➞ [16, 18, 57]

// console.log(largestNumbers(0, [1, 3, 4, 2])) //➞ []
// Notes
// The returned array must be sorted in ascending order.
function largestNumbers(n, arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let largestNum = sortedArr.slice(0, n);
    return largestNum.reverse()
}
function largestNumbers(n, arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let largestNum = [];
    for (let i = n - 1; i >= 0; i--) {
        largestNum.push(sortedArr[i])
    }
    return largestNum
}
// -------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of numbers. Return the largest number in the array.

// Examples
// console.log(findLargestNum([4, 5, 1, 3])) //➞ 5

// console.log(findLargestNum([300, 200, 600, 150]))// ➞ 600
// 
// console.log(findLargestNum([1000, 1001, 857, 1])) //➞ 1001
// Notes
// Expect either a positive number or zero (there are no negative numbers).
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function findLargestNum(arr) {
    let res = arr.sort((a, b) => b - a)
    // return res[0]
    return res.shift()
}
function findLargestNum(arr) {
    let res = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (res < arr[i]) {
            res = arr[i]
        }
    }
    return res
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples
// console.log(correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// )) //➞ [1, 1, -1]

// console.log(correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// )) //➞ [1, -1, 1, 1, 1]
// Notes
// The input array lengths will always be the same.
function correctStream(arr1, arr2) {
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            res.push(1)
        } else {
            res.push(-1)
        }
    }
    return res
}

function correctStream(arr1, arr2) {
    let res = [];
    arr1.map((item, index) => {
        item === arr2[index] ? res.push(1) : res.push(-1);
    })
    return res;
}
// -----------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of strings and returns the words that are exactly four letters.

// // Examples
// console.log(isFourLetters(["Tomato", "Potato", "Pair"])) //➞ ["Pair"]

// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])) //➞ ["Bear"]

// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])) //➞ ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.
function isFourLetters(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].length == 4 ? res.push(arr[i]) : i
    }
    return res;
}
function isFourLetters(arr) {
    let res = [];
    arr.map(item => item.length === 4 ? res.push(item) : item)
    return res
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.
// Examples
// console.log(negate([1, 2, 3, 4])) //➞ [-1, -2, -3, -4]

// console.log(negate([-1, 2, -3, 4])) //➞ [1, -2, 3, -4]

// negate([]) ➞ []
// Notes
// If you get an empty array, return an empty array: []
function negate(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * -1
    }
    return arr
}

function negate(arr) {
    return arr.map(item => item)
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Given an array of integers, return the difference between the largest and smallest integers in the array.

// Examples
// console.log(difference([10, 15, 20, 2, 10, 6])) //➞ 18
// // // 20 - 2 = 18

// console.log(difference([-3, 4, -9, -1, -2, 15])) //➞ 24
// // // 15 - (-9) = 24

// console.log(difference([4, 17, 12, 2, 10, 2])) //➞ 15
// Notes
// N/A
function difference(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max - min
}

function difference(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    // return sortedArr[sortedArr.length-1] - sortedArr[0]
    return sortedArr.pop() - sortedArr.shift()

}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of numbers and returns only the even values.

// Examples
// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])) //➞ [2, 4, 6, 8]

// console.log(noOdds([43, 65, 23, 89, 53, 9, 6])) // ➞ [6]

// console.log(noOdds([718, 991, 449, 644, 380, 440])) //➞ [718, 644, 380, 440]
// Notes
// Return all even numbers in the order they were given.
// All test cases contain valid numbers ranging from 1 to 3000.
function noOdds(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? res.push(arr[i]) : i;
    }
    return res
}
function noOdds(arr) {
    let res = [];
    arr.map(item => item % 2 == 0 ? res.push(item) : item)
    return res;
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function to multiply all of the values in an array by the amount of values in the given array.

// Examples
// console.log(multiplyByLength([2, 3, 1, 0])) //➞ [8, 12, 4, 0]

// console.log(multiplyByLength([4, 1, 1])) //➞ ([12, 3, 3])

// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])) //➞  [7, 0, 21, 21, 49, 14, 7]

// console.log(multiplyByLength([0])) //➞ ([0])
// Notes
// All of the values given are numbers.
// All arrays will have at least one element.
// Don't forget to return the result.

function multiplyByLength(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        arr[i] = arr[i] * len
    }
    return arr
}
function multiplyByLength(arr) {
    let len = arr.length
    return arr.map(item => item = item * len)

}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// Examples
// console.log(hurdleJump([1, 2, 3, 4, 5], 5)) //➞ true

// console.log(hurdleJump([5, 5, 3, 4, 5], 3)) //➞ false

// console.log(hurdleJump([5, 4, 5, 6], 10)) //➞ true

// console.log(hurdleJump([1, 2, 1], 1)) //➞ false
// Notes
// Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).

function hurdleJump(arr, hurdle) {
    return arr.length > hurdle ? false : true;
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function to remove all null values from an array.

// Examples
// console.log(removeNull(["a", null, "b", null])) //➞ ["a", "b"]

// console.log(removeNull([null, null, null, null, null])) //➞ []

// console.log(removeNull([7, 8, null, 9])) //➞ [7, 8, 9]
// Notes
// N/A
function removeNull(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            res.push(arr[i])
        }
    }
    return res
}
function removeNull(arr) {
    let res = [];
    arr.map(item => item !== null ? res.push(item) : item)
    return res;
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of values and returns the first and last values in a new array.

// Examples
// console.log(firstLast([5, 10, 15, 20, 25])) //➞ [5, 25]

// console.log(firstLast(["edabit", 13, null, false, true])) //➞ ["edabit", true]

// console.log(firstLast([undefined, 4, "6", "hello", null])) //➞ [undefined, null]
// Notes
// Test input will always contain a minimum of two elements within the array.
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function firstLast(arr) {
    return [arr.shift(), arr.pop()]
}
function firstLast(arr) {
    return [arr[0], arr[arr.length - 1]]
}
// ------------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that applies a discount d to every number in the array.

// Examples
// console.log(getDiscounts([2, 4, 6, 11], "50%")) //➞ [1, 2, 3, 5.5]

// console.log(getDiscounts([10, 20, 40, 80], "75%")) //➞ [7.5, 15, 30, 60]

// console.log(getDiscounts([100], "45%")) //➞ [45]
// Notes
// The discount is the percentage of the original price (i.e the discount of "75%" to 12 would be 9 as opposed to taking off 75% (making 3)).
// There won't be any awkward decimal numbers, only 0.5 to deal with.
function getDiscounts(arr, discount) {
    let discountPercent = parseFloat(discount) / 100
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * discountPercent
    }
    return arr
}
function getDiscounts(arr, discount) {
    let discountPercent = parseFloat(discount) / 100
    return arr.map(item => item = item * discountPercent)
}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples
// console.log(repeat("edabit", 3)) //➞ ["edabit", "edabit", "edabit"]

// console.log(repeat(13, 5))// ➞ [13, 13, 13, 13, 13]

// console.log(repeat("7", 2)) //➞ ["7", "7"]

// console.log(repeat(0, 0)) //➞ []
// Notes
// item can be either a string or a number.
// times will always be a number.
function repeat(value, n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(value)
    }
    return res;
}
// -------------------------------------------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that takes an array of elements and returns only the integers.

// // Examples
// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])) //➞ [9, 2, 16]

// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])) //➞ [81, 123]

// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])) //➞ [10, 56, 20, 3]

// console.log(returnOnlyInteger(["String",  true,  3.3,  1])) //➞ [1]
// Notes
// N/A
function returnOnlyInteger(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] == "number" ? res.push(arr[i]) : i;
    }
    return res
}
function returnOnlyInteger(arr) {
    let res = [];
    arr.map(item => typeof item == "number" ? res.push(item) : item)
    return res
}
// ----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that adds a string ending to each member in an array.

// // Examples)
//// ➞ ["bending", "sharpening", "meaning"]
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function addEnding(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + char
    }
    return arr
}
function addEnding(arr, char) {
    return arr.map(item => item = item + char)
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

// // Examples
// console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])) //➞ 6

// console.log(countUppercase(["little", "lower", "down"])) //➞ 0

// console.log(countUppercase(["EDAbit", "Educate", "Coding"])) //➞ 5
// // Notes
// Check the Resources for some array methods that might be helpful.
// This is originally a loose translation of a Python problem. However, the Pythonic List Comprehension syntax was never really adopted in JavaScript, so I elected to make our Uppercase counter broken in a few other ways.
// A lot of people (including me!) have rewritten the function entirely. I'm gonna make an executive decision and say that's fine here (even though complete rewrites are generally not a good idea!).
function itemItera(val) {
    let res = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] == val[i].toUpperCase()) {
            res += 1
        } else {
            res += 0
        }
    }
    return res;
}

function countUppercase(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += itemItera(arr[i])
    }
    return res
}
// --------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns true if there exists at least one number that is larger than or equal to n.

// Examples
// console.log(existsHigher([5, 3, 15, 22, 4], 10)) //➞ true

// console.log(existsHigher([1, 2, 3, 4, 5], 8)) //➞ false

// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) //➞ true

// console.log(existsHigher([], 5)) //➞ false
// Notes
// Return false for an empty array [].
function existsHigher(arr,maxNum){
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] >= maxNum){
            return true
        }
    }
    return false
}
function existsHigher(arr,maxNum){
    return arr.some(item => item >= maxNum)
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// Examples
// [5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]

// [9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]

// [17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]

// [6, 1], 7 ➞ [6, 1]

// [3, 2, 9], 3 ➞ [0, 2, 0]

// [48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
// Notes
// If you get stuck, see Comments for a hint.
function reverse(arr,modulNum){
    for (let i = 0 ; i < arr.length ; i++){
        arr[i] = arr[i] % modulNum
    }
    return arr
}
function reverse(arr,modulNum){
    return arr.map(item => item = item % modulNum)
}
// console.log(reverse([5, 7, 8, 2, 1], 2)) //➞ [1, 1, 0, 0, 1]

// console.log(reverse([9, 8, 16, 47], 4)) //➞ [1, 0, 0, 3]

// console.log(reverse([17, 11, 99, 55, 23, 1], 5)) //➞ [2, 1, 4, 0, 3, 1]

// console.log(reverse([6, 1], 7)) //➞ [6, 1]

// console.log(reverse([3, 2, 9], 3)) //➞ [0, 2, 0]

// console.log(reverse([48, 22, 0, 19, 33, 100], 10)) //➞ [8, 2, 0, 9, 3, 0]
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that filters out an array to include numbers that only have a certain number of digits.

// Examples
// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) //➞ [232, 555]
// // // Include only numbers with 3 digits.

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) //➞ [2, 7, 8, 9]
// // // Include only numbers with 1 digit.

// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) //➞ []
// // // No numbers with only 1 digit exist => return empty array.

// console.log(filterDigitLength([5, 6, 8, 9], 1)) //➞ [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.
// Notes
// If no numbers of the specified digit length exist, return an empty array.
// If all numbers in the array have the specified digit length, return the original array.
// The sub-array returned should have the same relative order as the original array.
function filterDigitLength(arr,len){
    let res = [];
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i].toString().length == len){
            res.push(arr[i])
        }
    }
    return res
}
function filterDigitLength(arr,len){
    return arr.filter(item => item.toString().length == len )
}
// -------------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// Examples
// console.log(checkFactors([2, 3, 4], 12)) //➞ true
// // // Since 2, 3, and 4 are all factors of 12.

// console.log(checkFactors([1, 2, 3, 8], 12)) //➞ false
// // // 8 is not a factor of 12.

// console.log(checkFactors([1, 2, 50], 100)) //➞ true

// console.log(checkFactors([3, 6], 9)) //➞ false
// Notes
// N/A
function checkFactors(arr,factor){
    return arr.every(item => factor % item == 0)
}
function checkFactors(arr,factor){
    for(let i = 0 ; i < arr.length ; i++){
        if(factor % arr[i] !== 0){
            return false
        }
    }
    return true
}
// --------------------------------------------------------------------------------------------------------
// Questin)=> Write a function that maps files to their extension names.

// Examples
console.log(getExtension(["code.html", "code.css"]))
// ➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]))
// ➞ ["jpg", "pdf", "mp3"]

console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]))
// ➞ ["rb", "cpp", "py", "js"]
// Notes
// N/A
function getExtension(arr){
    return arr.map(item => item.split(".").pop())
}
function getExtension(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(arr[i].split(".").pop())
    }
    return res
}