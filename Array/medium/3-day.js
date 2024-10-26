// 1.Question)=> Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// })) //➞ [["D", 1], ["B", 2], ["C", 3]]

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// })) //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A
function objectToArray(obj){
    return Object.entries(obj)
}
function objectToArray(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let res = [];
    for(let i = 0 ; i < keys.length ; i++){
        res.push([keys[i],values[i]])
    }
    return res
}
function objectToArray(obj){
    let res = [];
    for(let key in obj){
        res.push([key,obj[key]])
    }
    return res
}
function objectToArray(obj){
    let keys = Object.keys(obj);
    let res = keys.reduce((acc,val)=>{
        acc.push([val,obj[val]]);
        return acc
    },[])

    return res
}
// -----------------------------------------------------------------------------
// 2.Question)=> Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// console.log(sortIt([4, 1, 3])) //➞ [1, 3, 4]

// console.log(sortIt([[4], [1], [3]])) //➞ [[1], [3], [4]]

// console.log(sortIt([4, [1], 3])) //➞ [[1], 3, 4]

// console.log(sortIt([[4], 1, [3]])) //➞ [1, [3], [4]]

// console.log(sortIt([[3], 4, [2], [5], 1, 6])) //➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(arr){
    return arr.sort((a,b)=> a-b)
}
function sortIt(arr) {
    let res = [...arr];
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = 0; j < res.length - 1 - i; j++) {
            if (res[j] > res[j + 1]) {
                let temp = res[j];
                res[j] = res[j + 1];
                res[j + 1] = temp;
            }
        }
    }
    return res;
}
// ------------------------------------------------------------------------------------------------------
// 3.Question)=> Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

function flatten(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
  }
  return arr2;
}
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// Examples
// console.log(flatten([[1, 2], [3, 4]])) //➞ []
// // // Expected: [1, 2, 3, 4]

// console.log(flatten([["a", "b"], ["c", "d"]])) //➞ []
// // // Expected: ["a", "b", "c", "d"]

// console.log(flatten([[true, false], [false, false]])) //➞ []
// // Expected: [true, false, false, false]
// Notes
// N/A
// --------------------------------------------------------------------------------------------------
// 4.Question)=> Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

// Examples
// console.log(secondLargest([10, 40, 30, 20, 50])) //➞ 40

// console.log(secondLargest([25, 143, 89, 13, 105])) //➞ 105

// console.log(secondLargest([54, 23, 11, 17, 10])) //➞ 23
// Notes
// There will be at least two numbers in the array.
function secondLargest(arr){
    if(arr.length < 2 ) return "your array is too short"
    let res = arr.sort((a,b)=> a-b);
    return res[res.length-2]
}
// ---------------------------------------------------------------------------------------------------------------------------
// 5.Question)=> Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples
// console.log(clone([1, 1])) //➞ [1, 1, [1, 1]]

// console.log(clone([1, 2, 3])) //➞ [1, 2, 3, [1, 2, 3]]

// console.log(clone(["x", "y"])) //➞ ["x", "y", ["x", "y"]]
// Notes
// N/A
function clone(arr){
    let res = [...arr,arr];
    return res
}
// ------------------------------------------------------------------------------------------------------------------
// 6.Question)=> 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

// Examples
// console.log(marathonDistance([1, 2, 3, 4])) //➞ false

// console.log(marathonDistance([1, 9, 5, 8, 2])) //➞ true

// console.log(marathonDistance([-6, 15, 4])) //➞ true
// Notes
// Items in the array will always be integers.
// Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
// Return false if the arguments are empty or not provided.
function marathonDistance(arr){
    let sum = arr.reduce((acc,val)=> acc+Math.abs(val),0);
    return sum === 25;
}
function marathonDistance(arr){
    let res = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        res += Math.abs(arr[i])
    }
    return res === 25
}

function marathonDistance(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            let temp = arr[i]*-1;
            res += temp
        }else{
            res += arr[i]
        }
    }
    return res === 25
}
function marathonDistance(arr){
    let res = 0;
    arr.map(item => res += Math.abs(item))
    return res === 25;
}

// ---------------------------------------------------------------------------------------------------------
// 7.Question)=> Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// console.log(testJackpot(["@", "@", "@", "@"])) //➞ true

// console.log(testJackpot(["abc", "abc", "abc", "abc"])) //➞ true

// console.log(testJackpot(["SS", "SS", "SS", "SS"])) //➞ true

// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) //➞ false

// console.log(testJackpot(["SS", "SS", "SS", "Ss"])) //➞ false
// Notes
// The elements must be exactly identical for there to be a jackpot.
function testJackpot(arr){
    let res = arr[0];
    return arr.every(item => item === res)
}
function testJackpot(arr){
    let res = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] !== res){
            return false
        }
    }
    return true
}
// -------------------------------------------------------------------------------------------------------------
// 8.Question)=> Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples
console.log(findNemo("I am finding Nemo !")) //➞ "I found Nemo at 4!"

console.log(findNemo("Nemo is me")) //➞ "I found Nemo at 1!"

console.log(findNemo("I Nemo am")) //➞ "I found Nemo at 2!"
// Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.
function findNemo(str){
    let arr = str.split(" ");
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == "Nemo"){
            return `I found Nemo at ${i+1}!`
        }
    }
    return `I can't find Nemo :(`
}
