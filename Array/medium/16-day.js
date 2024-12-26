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
console.log(isScalable([1, 2, 4, 6, 7, 8])) //➞ true

console.log(isScalable([40, 45, 50, 45, 47, 52])) //➞ true

console.log(isScalable([2, 9, 11, 10, 18, 21])) //➞ false
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