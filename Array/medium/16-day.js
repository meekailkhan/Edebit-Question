// Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

// Examples
// console.log(letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D")) //➞ 3

// // // "D" shows up 3 times: twice in the first row, once in the third row.

// console.log(letterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "H")) //➞ 2
// Notes
// You will always be given an array with five sub-arrays.
function letterItretor(letters,letter){
    let count = 0;
    for(let val of letters){
        if(val === letter){
            count++
        }
    }
    return count;
}
function letterCounter(arr,letter){
    let count = 0;
    for(let i = 0 ; i < arr.length ;i++){
        count+= letterItretor(arr[i],letter)
    }
    return count
}

function letterCounter(arr,letter,count=0){
    if(arr.length === 0) return count;
    count += letterItretor(arr[0],letter);
    return letterCounter(arr.slice(1),letter,count)
}

function letterCounter(arr,letter){
    let res = arr.flat().filter(item => item === letter).length
    return res
}

// -----------------------------------------------------------------------------
// Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// // Examples
// console.log(nextInLine([5, 6, 7, 8, 9], 1)) //➞ [6, 7, 8, 9, 1]

// console.log(nextInLine([7, 6, 3, 23, 17], 10)) //➞ [6, 3, 23, 17, 10]

// console.log(nextInLine([1, 10, 20, 42 ], 6)) //➞ [10, 20, 42, 6]

// console.log(nextInLine([], 6)) //➞ "No array has been selected"
// Notes
// For an empty array input, return: "No array has been selected"

function nextInLine(arr,num){
    if(arr.length === 0 ) return "No array has been selected"
    arr.push(num);
    return arr.slice(1)
}
// ----------------------------------------------------------------------------------------
// Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// Examples
// console.log(isScalable([1, 2, 4, 6, 7, 8])) //➞ true

// console.log(isScalable([40, 45, 50, 45, 47, 52])) //➞ true

// console.log(isScalable([2, 9, 11, 10, 18, 21])) //➞ false
// Notes
// The array may start at any number and can be any length.
function isScalable(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(Math.abs(arr[i+1]-arr[i]) > 5){
            return false
        }
    }
    return true
}

function isScalable(arr){
    let res = arr.every((item,index)=>{
        if(index===0)return true;
        return Math.abs(item - arr[index-1]) <= 5
    })
    return res
}
// -------------------------------------------------------------------------------------------------------
// Switcharoo
// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
// flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

// flipEndChars("ada") ➞ "Two's a pair."

// flipEndChars("Ada") ➞ "adA"

// flipEndChars("z") ➞ "Incompatible."

// flipEndChars([1, 2, 3]) ➞ "Incompatible."
// Notes
// Tests are case sensitive (e.g. "A" and "a" are not the same character).
// --------------------------------------------------------------------------
// Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.
// Examples
// console.log(matrix(3, 2, 3)) //➞ [[3, 3], [3, 3], [3, 3]]

// console.log(matrix(2, 1, "edabit")) //➞ [["edabit"], ["edabit"]]

// console.log(matrix(3, 2, 0)) //➞ [[0, 0], [0, 0], [0, 0]]
// Notes
// The first two arguments will always be integers.
// The third argument is either a string or an integer.
function matrix(x,y,z){
    let res = []
    for(let i = 0 ; i < x ; i++){
        let ele = [];
        for(let j = 0 ; j < y ; j++){
            ele.push(z)
        }
        res.push(ele)
    }
    return res
}

function matrix(x,y,z,res=[]){
    if(x===0) return res;
    let ele = []
    for(let i = 0 ; i < y ; i++){
        ele.push(z)
    }
    res.push(ele);
    return matrix(x-1,y,z,res)

}
// --------------------------------------------------------------------------------------------------------------
// Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

// Examples
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])) //➞ true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]

console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])) //➞ true

console.log(puzzlePieces([1, 2], [-1, -1])) //➞ false

console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])) //➞ false
// Notes
// Each array will have at least one element.
// Return false if both arrays are of different length.
function puzzlePieces(arr1,arr2){
    if(arr1.length !== arr2.length) return false
    let checker = arr1[0] + arr2[0];
    for(let i = 1 ; i < arr1.length ; i++){
        if(arr1[i] + arr2[i] !== checker){
            return false
        }
    }
    return true
}
