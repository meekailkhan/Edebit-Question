// 1.Question)=> Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples
// console.log(removeEnemies(["Fred"], [])) //➞ ["Fred"]

// console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])) //➞ ["Adam", "Tanya"]

// console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])) //➞ ["Emily", "Steve"]
//Notes
// All names to be removed will be in the enemies array; simply return the array, no fancy strings.
function removeEnemies(arr1, arr2) {
    let res = [];
    for (let val of arr1) {
        if (!arr2.includes(val)) {
            res.push(val)
        }
    }
    return res
}

function removeEnemies(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}

function removeEnemies(arr1, arr2) {
    return arr1.reduce((acc, val) => {
        if (!arr2.includes(val)) {
            acc.push(val)
        }
        return acc
    }, [])
}
// -----------------------------------------------------------------
//Q.2=>  Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// Examples
// console.log(upwardTrend([1, 2, 3, 4])) //➞ true

// console.log(upwardTrend([1, 2, 6, 5, 7, 8])) //➞ false

// console.log(upwardTrend([1, 2, 3, "4"])) //➞ "Strings not permitted!"

// console.log(upwardTrend([1, 2, 3, 6, 7])) //➞ true
// Notes
// If there is a string element in the array, return "Strings not permitted!".
// The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).
function upwardTrend(arr) {
    if (arr.some(item => typeof item == 'string')) {
        return 'String not permitted'
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}
// -------------------------------------------------------------------------------------
// Q.3 => Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// // Examples
// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)) //➞ true

// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)) //➞ true

// console.log(checkSum([0, 98, 76, 23], 174)) //➞ true

// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)) //➞ false

// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)) //➞ false
// // Notes
// N/A
function checkSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == n) {
                return true
            }
        }
    }
    return false
}

function checkSum(arr, n, iter = arr.length - 1) {
    if (iter == 0) return false
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] + arr[iter]) == n) {
            return true
        }
    }
    return checkSum(arr, n, iter - 1)
}
// -----------------------------------------------------------------------------------------
// Q.4 => Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// Examples
// console.log(probability([5, 1, 8, 9], 6)) //➞ 50.0

// console.log(probability([7, 4, 17, 14, 12, 3], 16)) //➞ 16.7

// console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)) //➞ 70.0
// Notes
// Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)
// The numbers in the array are uniformly distributed, and have an equal chance of being chosen.
function probability(arr, n) {
    let greaterN = arr.filter(item => item >= n);
    let res = 100 * greaterN.length / arr.length
    return parseFloat(res.toFixed(1))
}
// -----------------------------------------------------------------------------------------------
// Q.5 => Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// Examples
// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) //➞ true
// // // Your cards can make the number 96
// // // Your opponent can make the number 73
// // // You win the round since 96 > 73

// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) //➞ true

// console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])) //➞ false

// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])) //➞ false
// Notes
// Return false if you and your opponent reach the same maximum number (see example #4).

function winRound(arr1, arr2) {
    let myScore = arr1.sort().join("");
    let opponent = arr2.sort().join("");

    let playerMax = myScore.slice(myScore.length - 2, myScore.length)
    let opponentMax = opponent.slice(opponent.length - 2, myScore.length);
    return playerMax > opponentMax
}

// -----------------------------------------------------------------------------------------
// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples
// console.log(squarePatch(3)) //➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

// console.log(squarePatch(5)) //➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

// console.log(squarePatch(1)) //➞ [
//   [1]
// ]

// console.log(squarePatch(0)) //➞ []
// Notes
// n >= 0.
// If n === 0, return an empty array.
function squarePatch(n) {
    if (n === 0) return [];
    let res = [];
    for (let i = 0; i < n; i++) {
        let subArr = [];
        for (let j = 0; j < n; j++) {
            subArr.push(n)
        }
        res.push(subArr)
    }
    return res
}
function squarePatch(n) {
    return Array(n).fill(Array(n).fill(n))
}
function squarePatch(n, result = []) {
    if (n === 0) return [];
    if (result.length === n) return result;
    result.push(Array(n).fill(n));
    return squarePatch(n, result)
}

// ----------------------------------------------------------------------------------------------------------
// Simple Encoder
// Create a function that takes a string str and performs simple encoding as per the following method:

// Replace all single occurrence characters with [
// Replace all characters with two or more occurrences with ]
// Return the final string after modification.

// Examples
// console.log(simpleEncoder("Mubashir")) //➞ "[[[[[[[["
// // // '[' for each character

// console.log(simpleEncoder("Matt")) //➞ "[[]]"
// // // ']' for both 't'

// console.log(simpleEncoder("eD  aBiT")) //➞ "[[]][[[["
// // Two spaces in between
// Notes
// Strings can contain lower and uppercase letters. Treat them equally (i.e. A = a, B = b).
// Spaces are also characters.

function simpleEncoder(str) {
    let newRes = '';
    for (let char of str) {
        let val = 0;
        for (let i = 0; i < str.length; i++) {
            if (char == str[i]) {
                val++
            }
        }
        newRes += val
    }
    let res = '';
    for (let i = 0; i < newRes.length; i++) {
        if (newRes[i] == 1) {
            res += '['
        } else {
            res += ']'
        }
    }
    return res
}
// --------------------------------------------------------------------------------------------------------------------
// Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.
// Examples
// console.log(changeTypes(["a", 12, true])) //➞ ["A!", 13, false]

// console.log(changeTypes([13, "13", "12", "twelve"])) //➞ [13, "13!", "12!", "Twelve!"]

// console.log(changeTypes([false, "false", "true"])) //➞ [true, "False!", "True!"]
// Notes
// There won't be any float values.
// You won't get strings with both numbers and letters in them.
// Although the task may be easy, try keeping your code as clean and as readable as possible!

function changeTypes(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            res.push(arr[i][0].toUpperCase() + arr[i].slice(1))
        } else if (typeof arr[i] === 'number') {
            res.push(arr[i] % 2 === 0 ? arr[i] + 1 : arr[i])
        } else if (typeof arr[i] === 'boolean') {
            res.push(!arr[i])
        }
    }
    return res
}
// -----------------------------------------------------------------------------------------------------------------------
// Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// // Examples
// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4])) //➞ 3

// console.log(findSingleNumber([2])) //➞ 2

// console.log(findSingleNumber([])) //➞ null

// console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13])) //➞ 8

// console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2])) //➞ 101
// Notes
// Don't forget to return the result.
// Be aware this challenge includes two validations:
// Empty input should return null (example #3).
// Single item arrays should return that item (example #2).
// There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
// If you're stuck or your solution is over complicated check the Resources tab.

function findSingleNumber(arr){
    if(arr.length === 0) return null;
    if(arr.length === 1) return arr[0];

    let freq = {};
    for(let val of arr){
        freq[val] = (freq[val] || 0) + 1
    }

    for(let key in freq){
        if(freq[key] === 1) return Number(key)
    }

    return null
}
// ----------------------------------------------------------------------------------------------------------------------
// Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
// Examples
console.log(pingPong(["Ping!"], true)) //➞ ["Ping!", "Pong!"]

console.log(pingPong(["Ping!", "Ping!"], false)) //➞ ["Ping!", "Pong!", "Ping!"]

console.log(pingPong(["Ping!", "Ping!", "Ping!"], true)) //➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
// You will always return the ball (i.e. the Pongs are yours).
// Player 1 serves the ball and makes Ping!.
// Return an array of strings.

function pingPong(arr,isWin){
    let res = [];
    let subArr = ['Ping!','Pong!']
    for(let i = 0 ; i < arr.length ; i++){
        res.push(...subArr)
    }

    if(isWin){
        return res
    }else{
        return res.slice(0,-1)
    }
}