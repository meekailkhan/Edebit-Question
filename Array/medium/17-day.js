// Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

// Examples
// console.log(flattenCurve([1, 2, 3, 4, 5])) //➞ [3, 3, 3, 3, 3]

// console.log(flattenCurve([0, 0, 0, 2, 7, 3])) //➞ [2, 2, 2, 2, 2, 2]

// console.log(flattenCurve([4])) //➞ [4]

// console.log(flattenCurve([])) //➞ []
// Notes
// Round averages to 1 decimal point.
// Return an empty array if given an empty array (see example #4).

function flattenCurve(arr){
    if(arr.length === 0) return [];
    let fillElem = arr[Math.floor(arr.length/2)];
    return arr.fill(fillElem)
}
function flattenCurve(arr){
    if(arr.length === 0)return [];
    let fillElem = arr[Math.floor(arr.length/2)];
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(fillElem)
    }
    return res
}

function flattenCurve(arr){
    if(arr.length === 0 )return [];
    let fillElem = arr[Math.floor(arr.length/2)];
    let res = arr.reduce((acc,val)=>{
        acc.push(fillElem)
        return acc
    },[]);
    return res
}

function flattenCurve(arr,length=arr.length,res=[],fillElem=arr[Math.floor(arr.length/2)]){
    if(length === 0 ) return res;
    res.push(fillElem);
    return flattenCurve(arr,length-1,res)
}
// // ------------------------------------------------------------------------------------------------------------------
// Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])) //➞ [true, false, false, false]

// console.log(flickSwitch(["flick", 11037, 3.14, 53])) //➞ [false, false, false, false]

// console.log(flickSwitch([false, false, "flick", "sheep", "flick"])) //➞ [true, true, false, false, true]
// Notes
// "flick" will always be given in lowercase.
// An array may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.
function flickSwitch(arr){
    let val = true;
    let res = []
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]==='flick'){
            val = !val
        }
        res.push(val)
    }
    return res
}
function flickSwitch(arr){
    let val = true;
    return arr.map(item => item === 'flick' ? val = !val : val);
}
// -----------------------------------------------------------------------------------------------------
// Moving to the End
// Write a function that moves all elements of one type to the end of the array.

// Examples
// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)) //➞ [3, 2, 4, 4, 1, 1]
// // // Move all the 1s to the end of the array.

// console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)) //➞ [7, 8, 1, 2, 3, 4, 9]

// console.log(moveToEnd(["a", "a", "a", "b"], "a")) //➞ ["b", "a", "a", "a"]
// Notes
// Keep the order of the un-moved items the same.
function moveToEnd(arr,target){
    let notTargeted = arr.filter(item => item !== target);
    let targated = arr.filter(item => item === target)

    return notTargeted.concat(targated)
}

// // -------------------------------------------------------------------------------------------------
// Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

// Examples
console.log(peelLayerOff([
  ["a", "b", "c", "d"],
  ["e", "f", "g", "h"],
  ["i", "j", "k", "l"],
  ["m", "n", "o", "p"]
])) //➞ [
//   ["f", "g"],
//   ["j", "k"]
// ]

console.log(peelLayerOff([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35]
])) //➞ [
//   [7, 8, 9],
//   [12, 13, 14],
//   [17, 18, 19],
//   [22, 23, 24],
//   [27, 28, 29]
// ]

console.log(peelLayerOff([
  [true, false, true],
  [false, false, true],
  [true, true, true]
])) //➞ [[false]]

console.log(peelLayerOff([
  ["hello", "world"],
  ["hello", "world"]
])) //➞ []
// Notes
// The 2D grid is always a rectangular/square shape.
// Always return some form of nested array, unless there are no elements. In that case, return an empty array.Peeling off the Outer Layers
function peelLayerOff(arr){
    if(arr.length <= 2 || arr[0].length <= 2) return [];
    return arr.slice(1,-1).map(item => item.slice(1,-1))
}