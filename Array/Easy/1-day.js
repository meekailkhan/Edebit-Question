// Question)=> Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]

// console.log(minMax([2334454, 5])) //➞ [5, 2334454]

// console.log(minMax([1])) //➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
function minMax(arr) {
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
    return [min, max];
}
function minMax(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return [arr[0], arr[arr.length - 1]]
}
// --------------------------------------------------------------------------------------------------------------
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// console.log(canNest([1, 2, 3, 4], [0, 6])) //➞ true

// console.log(canNest([3, 1], [4, 0])) //➞ true

// console.log(canNest([9, 9, 8], [8, 9])) //➞ false

// console.log(canNest([1, 2, 3, 4], [2, 3])) //➞ false
// // Notes
// Note the strict inequality (see example #3).
function canNest(arr1, arr2) {
    let min1 = Math.min(...arr1);
    let max1 = Math.max(...arr1);

    let min2 = Math.min(...arr2);
    let max2 = Math.max(...arr2);

    return min1 > min2 && max1 < max2
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// Examples
// console.log(seriesResistance([1, 5, 6, 3])) //➞ "15 ohms"

// console.log(seriesResistance([16, 3.5, 6])) //➞ "25.5 ohms"

// console.log(seriesResistance([0.5, 0.5])) //➞ "1.0 ohm"
// // Notes
// All inputs will be valid.
// Notice the singular ohm for values <= 1.
// This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.
function seriesResistance(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res <= 1 ? `${res} ohm` : `${res} ohms`;
}
function seriesResistance(arr) {
    let res = 0;
    arr.map(item => res += item)
    return res <= 1 ? `${res} ohm` : `${res} ohms`;
}
function seriesResistance(arr) {
    let res = arr.reduce((acc, val) => acc + val, 0)
    return res <= 1 ? `${res} ohm` : `${res} ohms`;
}
// ---------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes two arrays and insert the second array in the middle of the first array.

// // Examples
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])) //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(tuckIn([15,150], [45, 75, 35])) //➞ [15, 45, 75, 35, 150]

// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])) //➞ [[1, 2], [3, 4], [5, 6]]
// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.
function tuckIn(arr1, arr2) {
    (
        arr2.unshift(arr1.shift()))
    arr2.push(arr1.pop())
    return arr2
}
function tuckIn(arr1, arr2) {
    return [arr1.shift(), ...arr2, arr1.pop()]
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// // Examples
// console.log(numberSplit(4)) //➞ [2, 2]

// console.log(numberSplit(10)) //➞ [5, 5]

// console.log(numberSplit(11)) //➞ [5, 6]

// console.log(numberSplit(-9)) //➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.
function numberSplit(num) {
    let leftSide = Math.floor(num / 2)
    let rightSide = Math.ceil(num / 2)
    return [leftSide, rightSide]
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// console.log(filterArray([1, 2, "a", "b"])) //➞ [1, 2]

// console.log(filterArray([1, "a", "b", 0, 15])) //➞ [1, 0, 15]

// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]
// // Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.
function filterArray(arr) {
    let res = []
    arr.map(item => typeof item == "number" ? res.push(item) : item)
    return res;
}
function filterArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        typeof arr[i] == "number" ? res.push(arr[i]) : i;
    }
    return res;
}
function filterArray(arr) {
    return arr.filter(item => typeof item == "number")
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// console.log(sortByLength(["a", "ccc", "dd)
// Notes
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty (see example #4).
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length)
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes in an array of numbers and returns the sum of its cubes.

// Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// console.log(sumOfCubes([3, 4, 5])) //➞ 216

// console.log(sumOfCubes([2])) //➞ 8

// console.log(sumOfCubes([])) //➞ 0
// Notes
// If given an empty array, return 0.
function sumOfCubes(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] ** 3
    }
    return res
}
function sumOfCubes(arr) {
    let res = 0;
    arr.map(item => res += item ** 3)
    return res
}
function sumOfCubes(arr) {
    return arr.reduce((acc, val) => acc + val ** 3, 0)
}
// ---------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// Examples
// console.log(sortByLength(["Google", "Apple", "Microsoft"]))
// // ➞ ["Apple", "Google", "Microsoft"]

// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]))
// // ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// console.log(sortByLength(["Turing", "Einstein", "Jung"]))
// ➞ ["Jung", "Turing", "Einstein"]
// Notes
// All test cases contain arrays with strings of different lengths, so you won't have to deal with multiple strings of the same length.
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length)
}
// --------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
// console.log(isAvgWhole([1, 3])) //➞ true

// console.log(isAvgWhole([1, 2, 3, 4])) //➞ false

// console.log(isAvgWhole([1, 5, 6])) //➞ true

// console.log(isAvgWhole([1, 1, 1])) //➞ true

// console.log(isAvgWhole([9, 2, 2, 5])) //➞ false
// Notes
// N/A
function isAvgWhole(arr) {
    let res = arr.reduce((acc, val) => acc + val, 0)
    return Number.isInteger(res / arr.length)
}
// ----------------------------------------------------------------------------------------------------------------
// Question)=> Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// Examples
// console.log(getAbsSum([2, -1, 4, 8, 10])) //➞ 25

// console.log(getAbsSum([-3, -4, -10, -2, -3])) //➞ 22

// console.log(getAbsSum([2, 4, 6, 8, 10])) //➞ 30

// console.log(getAbsSum([-1])) //➞ 1
// Notes
// The term "absolute value" means to remove any negative sign in front of a number, and to think of all numbers as positive (or zero).
// All the elements in the given array are integers.
function getAbsSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i])
    }
    return res;
}
function getAbsSum(arr){
    let res = 0;
    arr.map(item => res += Math.abs(item))
    return res
}
function getAbsSum(arr) {
    return arr.reduce((acc,val) => acc + Math.abs(val) ,0)
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples
// console.log(sortNumsAscending([1, 2, 10, 50, 5])) //➞ [1, 2, 5, 10, 50]

// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])) //➞ [-95, -24, 4, 29, 80, 85]

// console.log(sortNumsAscending(null)) //➞ []

// console.log(sortNumsAscending([])) //➞ []
// Notes
// Test input can be positive or negative.
function sortNumsAscending(arr){
    if(arr === null || arr === undefined || arr.length === 0){
        return []
    }
    return arr.sort((a,b) => a - b);
}
// ------------------------------------------------------------------------------------------------------------
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// Examples
// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) //➞ [7, 90, 2]

// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) //➞ [-34, -2, 7]

// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) //➞ [0.7634, 9.32, 9]
// Notes
// Watch out for negative integers (numbers).

function eachArr(arr){
    let sortedArr = arr.sort((a,b) => b-a)
    return sortedArr[0]
}

function findLargestNums(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(eachArr(arr[i]))
    }
    return res;
}
function findLargestNums(arr){
    let res = []
    arr.map(item => res.push(eachArr(item)))
    return res
}
function findLargestNums(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        let item = arr[i];
        let max = item[0]
        for(let j = 0 ; j < item.length ; j++){
            if(max < item[j]){
                max = item[j]
            }
        }
        res.push(max)
    }
    return res
}
// ----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// Examples
// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) //➞ "(123) 456-7890"

// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) //➞ "(519) 555-4468"

// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) //➞ "(345) 501-2527"
// Notes
// Don't forget the space after the closing parenthesis.
function formatPhoneNumber(arr){
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}`
}
// ---------------------------------------------------------------------------------------------------------------
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// // Examples
// console.log(amplify(4)) //➞ [1, 2, 3, 40]
// // // Create a sequence from 1 to 4
// // // 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3)) //➞ [1, 2, 3]
// // // Create a sequence from 1 to 3
// // // There are no numbers that can be exactly divided by 4

// console.log(amplify(25)) //➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.
// Notes
// The given parameter num will always be equal to or greater than 1.
// Remember to include the num as the higher bound of the sequence (see the Examples) above.
// A number a amplified by a factor b can also be read as: a * b.
// A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function amplify(num){
    let res =[];
    for(let i = 1 ; i <= num ; i++){
        if(i % 4 == 0){
            res.push(i*10)
        }else{
            res.push(i)
        }
    }
    return res
}
// -----------------------------------------------------------------------------------------------------
// Question)=> A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// console.log(societyName(["Adam", "Sarah", "Malcolm"])) //➞ "AMS"

// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) //➞ "CHLN"

// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) //➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.
function societyName(arr){
    arr.sort()
    let name = ""
    for(names of arr){
        name += names[0].toUpperCase()
    }
    return name
}
// ---------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// // Examples
// console.log(arrayOperation(1, 10, 3)) //➞ [3, 6, 9]

// console.log(arrayOperation(7, 9, 2)) //➞ [8]

// console.log(arrayOperation(15, 20, 7)) //➞ []
// Notes
// N/A
function arrayOperation(x,y,n){
    let res = [];
    for (let i = x ; i <= y ; i++){
        if(i % n == 0){
            res.push(i)
        }
    }
    return res
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// // Examples
// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) //➞ 43

// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) //➞ 100

// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //➞ 40
// Notes
// You can select any 5 numbers from the given array to form maximum possible total.
function maxTotal(arr){
    let sortedArr = arr.sort((a,b) => b-a)
    let res = 0;
    for(let i = 0 ; i < 5 ; i++){
        res += sortedArr[i]
    }
    return res
}
// -------------------------------------------------------------------------------------------------------------
// Question)=> A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

// Examples
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) //➞ true

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) //➞ false

// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)) //➞ true

// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)) //➞ false
// Notes
// Sub-arrays can be any length.
function isOmnipresent(arr,char){
    return arr.every(item => item.includes(char))
}

function isOmnipresent(arr,char){
    for(let i = 0 ; i < arr.length ; i++){
        if(!arr[i].includes(char)){
            return false
        }

    }
    return true
}
// -----------------------------------------------------------------------------------------------------------------
// Question)=> The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// // Examples
// console.log(calculateDifference({ "baseball bat": 20 }, 5)) //➞ 15

// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) //➞ 11

// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) //➞ 1
// Notes
// The object will always contain items (no empty objects).
// The sum of the items will always be greater than the limit.
function calculateDifference(obj,limit){
    let res = 0;
    res += Object.values(obj).reduce((acc,val) => acc + val ,0)
    return res - limit
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question)=> A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// Examples
// console.log(set([1, 3, 3, 5, 5])) //➞ [1, 3, 5]

// console.log(set([4, 4, 4, 4])) //➞ [4]

// console.log(set([5, 7, 8, 9, 10, 15])) //➞ [5, 7, 8, 9, 10, 15]

// console.log(set([3, 3, 3, 2, 1])) //➞ [1, 2, 3]
// Notes
// For this question, output an array, not a set. These are two distinctly different data structures in JavaScript (although they can be converted from one to the other).
// See resources for a hint if you get stuck.
function set(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res;
}
function set(arr){
    let res = [];
    arr.map(item => res.includes(item) ? item : res.push(item));
    return res
}
// ---------------------------------------------------------------------------------------------------------------------
// Question)=> Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.
// // Examples
// console.log(toArray(235)) //➞ [2, 3, 5]

// console.log(toArray(0)) //➞ [0]

// console.log(toNumber([2, 3, 5])) //➞ 235

// console.log(toNumber([0])) //➞ 0
// Notes
// All test cases will be weakly positive numbers: >= 0
function toNumber(arr){
    return parseInt(arr.join(""))
}
function toArray(num){
    let str = String(num);
    let res = [];
    for(let i = 0 ; i < str.length ; i++){
        res.push(Number(str[i]))
    }
    return res
}
function toArray(num){
    return [...String(num)].map(item => Number(item))
}
// --------------------------------------------------------------------------------------------------------------------------
// Question)=> According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Examples
// console.log(dropRight([1, 2, 3])) //➞ [1, 2]

// console.log(dropRight([1, 2, 3], 2)) //➞ [1]

// console.log(dropRight([1, 2, 3], 5)) //➞ []

// console.log(dropRight([1, 2, 3], 0)) //➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
function dropRight(arr,drop=1){
    if(drop < 0){
        return arr
    }
    if(drop >= arr.length){
        return []
    }
    return arr.slice(0,arr.length - drop)
}
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3) ➞ 24
// // The parameter n is specified as 3.
// // The first 3 numbers in the list are 9, 8 and 7.
// // The sum of these 3 numbers is 24 (9 + 8 + 7).
// // Return the answer.
// Examples
// console.log(sliceSum([1, 3, 2], 2)) //➞ 4

// console.log(sliceSum([4, 2, 5, 7], 4)) //➞ 18

// console.log(sliceSum([3, 6, 2], 0)) //➞ 0
// Notes
// If n is larger than the length of the array, return the sum of the whole array.
function sliceSum(arr,slice){
    let sliceArr = arr.slice(0,slice)
    return sliceArr.reduce((acc,val) => acc + val ,0)
}
function sliceSum(arr,slice){
    let res = 0;
    for(let i = 0 ; i < slice ; i++){
        res += arr[i]
    }
    return res
}
function sliceSum(arr,slice){
    let res = 0;
    arr.map((item,index)=>{
        if(index < slice){
            res += item
        }
    })
    return res
}
function sliceSum(arr,slice){
     let filterArray = arr.filter((item,index) => index < slice)
     return filterArray.reduce((acc,val) => acc + val ,0)
}
// ----------------------------------------------------------------------------------------------------------------------------------------------
// Create a function to count the number of 1s in a 2D array.

// Examples
// console.log(countOnes([
//   [1, 0],
//   [0, 0]
// ])) //➞ 1

// console.log(countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ])) //➞ 7

// console.log(countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ])) //➞ 2
// Notes
// N/A

function havaOnes(item){
    // let res = 0 ;
    // for(let i = 0 ; i < item.length ; i++){
    //     if(item[i] === 1){
    //         res++
    //     }
    // }
    // item.map(item => item === 1 ? res++ : item)
    let res = item.filter(val => val === 1)
    return res.reduce((acc,val) => acc + val ,0)
}

function countOnes(arr){
    let res = 0 ;
    for (let i = 0 ; i < arr.length ; i++){
        res += havaOnes(arr[i]) 
    }
    return res
}
function countOnes(arr){
    let res = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        let item = arr[i];
        for(let j = 0 ; j < item.length ; j++){
            if(item[j] === 1){
                res++
            }
        }
    }
    return res
}
let obj = {
    name : "meekail",
    age : 18
}
console.log(obj.valueOf)