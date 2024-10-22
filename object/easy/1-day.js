// 1.Quesion)=> You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples
// console.log(sortDrinkByPrice(drinks)) //➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// Notes
// N/A
function sortDrinkByPrice(arr) {
    let res = arr.sort((a, b) => a.price - b.price)
    return res
}
function sortDrinkByPrice(arr) {
    let a = arr[0];
    let b = arr[1];
    if (a.price > b.price) {
        [a, b] = [b, a]
    }
    return [a, b]
}
function sortDrinkByPrice(arr) {
    let a = arr[0];
    let b = arr[1];
    if (a.price > b.price) {
        a = arr[1];
        b = arr[0];
    }
    return [a, b]
}
// ------------------------------------------------------------------------------------------------------
// 2.Question)=> Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples
// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])) //➞ true
// // // The pair of items at each index are compared in turn.
// // // 1 from the first array is the same as 1 from the second array.
// // // 2 is the same as 2.
// // // However, 4 is greater than 3, so first array is superior.

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])) //➞ true

// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])) //➞ true

// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])) //➞ false

// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])) //➞ false
// Notes
// Both arrays will be the same length.
// All values and their counterparts will always be of the same data type.
// If the two arrays are the same, return false.
function isFirstSuperior(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return true
        }
    }
    return false
}
function isFirstSuperior(arr1, arr2) {
    let res = arr1.map((item, index) => item > arr2[index] ? true : false)
    return res.includes(true)
}
function isFirstSuperior(arr1, arr2) {
    return arr1 > arr2
}
function isFirstSuperior(arr1, arr2) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr1.length; i++) {
        a += arr1[i];
        b += arr2[i]
    }
    return a > b
}
function isFirstSuperior(arr1, arr2) {
    let a = arr1.reduce((acc, val) => acc + val, 0);
    let b = arr2.reduce((acc, val) => acc + val, 0);
    return a > b
}
// --------------------------------------------------------------------------------------------------------------------
// 3.Question)=> Burglary Series (20): Sign Your Name
// The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

// Examples
const obj = { yourSignature: "" };

function signYourName(obj){
    Object.seal(obj)

    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try";
    return obj;

} 

// console.log(signYourName(obj))//➞ { yourSignature: "Whatever" }
// Notes
// If you have suggestions on how to present or further test this challenge please leave a comment.
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
// ----------------------------------------------------------------------------------------------
// 3.Question)=> Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// Examples
// console.log(calculateDifference({ "baseball bat": 20 }, 5)) //➞ 15

// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) //➞ 11

// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) //➞ 1
// Notes
// The object will always contain items (no empty objects).
// The sum of the items will always be greater than the limit.
function calculateDifference(obj,num){
    let arr = Object.values(obj);
    let total = arr.reduce((acc,val)=> acc + val)
    return total - num
}
function calculateDifference(obj,num){
    let total = 0;
    for(let key in obj){
        total += obj[key] }
    return total - num
}
function calculateDifference(obj,num){
    let arr = Object.values(obj);
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i]
    }
    return res - num
}

function calculateDifference(obj,num){
    let arr = Object.values(obj);
    let res = 0;
    arr.map(item => res += item)
    return res - num
}
// -----------------------------------------------------------------------------------------------------------------------
// 4.Question)=> Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

// Here's an example hand:

// [
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ]
// The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.

// Examples
// console.log(maximumScore([
//   { tile: "N", score: 1 },
//   { tile: "K", score: 5 },
//   { tile: "Z", score: 10 },
//   { tile: "X", score: 8 },
//   { tile: "D", score: 2 },
//   { tile: "A", score: 1 },
//   { tile: "E", score: 1 }
// ])) //➞ 28

// console.log(maximumScore([
//   { tile: "B", score: 2 },
//   { tile: "V", score: 4 },
//   { tile: "F", score: 4 },
//   { tile: "U", score: 1 },
//   { tile: "D", score: 2 },
//   { tile: "O", score: 1 },
//   { tile: "U", score: 1 }
// ])) //➞ 15
// Notes
// Here, each tile is represented as an object with two keys: tile and score.

function maximumScore(arr){
    return arr.reduce((acc,val)=> acc + val.score ,0)
}
function maximumScore(arr){
    let res = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i].score
    }
    return res
}
function maximumScore(arr){
    let res = 0;
    arr.map(item => res += item.score )
    return res
}
function maximumScore(arr){
    let res = 0;
    arr.forEach(item => res += item.score);
    return res
}
// -------------------------------------------------------------------------------------------------------
// 5.Question)=> Printer Levels
// Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

// Examples
console.log(inkLevels({
  "cyan": 23,
  "magenta": 12,
  "yellow": 10
})) //➞ 10 

console.log(inkLevels({
  "cyan": 432,
  "magenta": 543,
  "yellow": 777
})) //➞ 432

console.log(inkLevels({
  "cyan": 700,
  "magenta": 700,
  "yellow": 0
})) //➞ 0
// Notes
// A single printed page requires each color once, so printing is not possible if any of the slots lack ink (see example #3).
function inkLevels(obj){
    let arr = Object.values(obj);
    let res = arr.sort((a,b) => a-b)
    return res[0];
}

function inkLevels(obj){
    let arr = Object.values(obj);
    let res = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(res > arr[i]){
            res = arr[i]
        }
    }
    return res
}

// -----------------------------------------------------------------------------------------------------------------