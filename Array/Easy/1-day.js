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
    for (let i = 0 ; i < arr.length ; i++){
        typeof arr[i] == "number" ? res.push(arr[i]) : i ;
    }
    return res;
}
function filterArray(arr){
    return arr.filter(item => typeof item == "number") 
}
// -----------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that returns an array of strings sorted by length in ascending order.

// Examples
// console.log(sortByLength(["a", "ccc", "dd)
// Notes
// Strings will have unique lengths, so don't worry about comparing two strings with identical length.
// Return an empty array if the input array is empty (see example #4).
function sortByLength(arr){
    return arr.sort((a,b) => a.length-b.length)
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
function sumOfCubes(arr){
    let res = 0;
    for (let i = 0 ; i < arr.length ; i++){
        res += arr[i]**3
    }
    return res
}
function sumOfCubes(arr){
    let res = 0 ;
    arr.map(item => res += item**3)
    return res
}
function sumOfCubes(arr){
    return arr.reduce((acc,val) => acc + val**3 ,0)
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
function sortByLength(arr){
    return arr.sort((a,b) => a.length - b.length)
}
// --------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// Examples
console.log(isAvgWhole([1, 3])) //➞ true

console.log(isAvgWhole([1, 2, 3, 4])) //➞ false

console.log(isAvgWhole([1, 5, 6])) //➞ true

console.log(isAvgWhole([1, 1, 1])) //➞ true

console.log(isAvgWhole([9, 2, 2, 5])) //➞ false
// Notes
// N/A
function isAvgWhole(arr){
    let res = arr.reduce((acc,val) => acc + val ,0)
    return Number.isInteger(res / arr.length)
}