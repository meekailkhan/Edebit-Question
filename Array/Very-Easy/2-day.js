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
function divisible(arr){
    let sum = 0;
    let product = 1;
    arr.map(item => product *= item)
    arr.map(item => sum+= item);
    return product % sum == 0 ? true : false;     
}
function divisible(arr){
    let sum = 0;
    let product = 1;
    for (let i = 0 ; i < arr.length ; i++){
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
console.log(findBob(["Jimmy", "Layla", "Bob"])) //➞ 2

console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])) //➞ 0

console.log(findBob(["Jimmy", "Layla", "James"])) //➞ -1
// Notes
// Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob").
function findBob(arr){
    return arr.indexOf("Bob")
}
function findBob(arr){
    for (let i = 0 ; i < arr.length ; i++){
        if(arr[i] == "Bob"){
            return i
        }
    }
    return -1
}