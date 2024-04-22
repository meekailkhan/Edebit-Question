// 1)=> Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function isThereSevent(arr){
//     if(arr.join("").includes(7)){
//         console.log("Boom")
//     }else{
//         console.log("there is no 7 in arr")
//     }
// }

// isThereSevent([1,2,6,8,4,3])
// isThereSevent([1,12,3,67,32])
// isThereSevent([1,127,3,6,32])
// ----------------------

//2)=> Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// function makePair(num1,num2){
//     return [num1,num2]
// }

// console.log(makePair(1,2)) // [1,2]
// console.log(makePair(123,32,413))


// 3)=> Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0


// function countTrue(arr) {
// 	let res = 0;
// 	for(let i =0;i<arr.length;i++){
// 		if(arr[i]== true){
// 			res++
// 		}
// 	}
// 	return res
// }

// console.log(countTrue([true,false,false,false,true])) // 2
// console.log(countTrue([true,true,false,true])) //3

// --------------------------------------------------------------------------------


//4)=> According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.
// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

// answer:
// function compact(arr){
//     return arr.filter(Boolean)
// }
// let array = [0, 1, false, 2, "", 3]
// let result = compact(array)
// console.log(result)

// ---------------------------------------------------------------------------------------------------

//5)=> Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

// function concat(...args) {
// 	return args.flat()
// }

// -------------------------------------------------------------
// 6)=>Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.

// function arrayOfMultiples (num, length) {
// 	let arr = [];
// 	for(let i=1;i<length;i++){
// 		arr.push(num*i)
// 	}
// 	return arr
// }
// console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]

// console.log(arrayOfMultiples(12, 10)) //[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

// console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7)=> write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].



// Examples
// flatten([[1, 2], [3, 4]]) ➞   [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]]) ➞  ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]]) ➞   [true, false, false, false]

// ans:
// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
//   }
//   return arr2.flat();
// }

// console.log(flatten([[1, 2], [3, 4]]))
// console.log(flatten([["a", "b"], ["c", "d"]]))
// console.log(flatten([[true, false], [false, false]]))

// --------------------------------------------------------------------------------------------------------------------------


//7)=> In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.

// function sortIt(arr) {
//   return arr.sort((a, b) => {
//     if (Array.isArray(a) && Array.isArray(b)) {
//       return a[0] - b[0];
//     } else if (Array.isArray(a)) {
//       return a[0] - b;
//     } else if (Array.isArray(b)) {
//       return a - b[0];
//     } else {
//       return a - b;
//     }
//   });
// }

// console.log(sortIt([4, 1, 3])); // ➞ [1, 3, 4]
// console.log(sortIt([[4], [1], [3]])); // ➞ [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])); // ➞ [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])); // ➞ [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6])); // ➞ [1, [2], [3], 4, [5], 6]

// -------------------------------------------------------------------------------------------------------------

// 8)=>Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// 

// ans:
// function reverse(arr){
//     return arr.reverse()
// }

// reverse([1, 2, 3, 4]) //➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) // ➞ [4, 3, 2, 9, 9]
// -------------------------------------------------------------------------------

// 9)=> Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.

// ans:
// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++)
// 		arr[i] = arr[i] + 1
// 	return arr
// }
// console.log(incrementItems([0, 1, 2, 3]))// ➞ [1, 2, 3, 4]

// console.log(incrementItems([2, 4, 6, 8]))// ➞ [3, 5, 7, 9]

// console.log(incrementItems([-1, -2, -3, -4]))// ➞ [0, -1, -2, -3]

// --------------------------------------------------------------------------------------------------------------

//10)=> You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// ans:
// const arr = [1,2,3,4,5,6];
// let [a,b] = [arr[0],arr[1]]

// console.log(a);
// console.log(b)

// ---------------------------------------------------------------------------------------------------------

//11)=> Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

// // ans:
// function getLastItem(arr){
//     let lastIndex = arr.length-1
//     return arr[lastIndex]
// }

// console.log(getLastItem(["cat", "dog", "duck"])) //➞ "duck"

// console.log(getLastItem([true, false, true])) //➞ true

// -------------------------------------------------------------------------------------------------------------------------

//12)=> Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// ans:
// function arrayToString(arr){
//     return String(arr.join(""))
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) // ➞ "123asdAAAA"

//13)=> Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// // canNest([1, 2, 3, 4], [2, 3]) ➞ false


// // ans:
// function canNest(arr1,arr2){
//     return Math.min(...arr1)>Math.min(...arr2)&&Math.max(...arr1)<Math.max(...arr2)
// }

// console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ true
// console.log(canNest([3, 1], [4, 0])) // ➞ true
// console.log(canNest([9, 9, 8], [8, 9])) // ➞ false
// console.log(canNest([1, 2, 3, 4], [2, 3])) // ➞ false


// -----------------------------------------------------------------------------------------------------------------
//14)=> Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
// Notes
// The first array always has two elements.
// Use the spread syntax to solve this challenge.

//ans:
// function tuckIn(arr1,arr2){
//     return [arr1[0],...arr2,arr1[1]]
// }
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])) //➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35])) //➞ [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]])) //➞ [[1, 2], [3, 4], [5, 6]]


//15)=> Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.

// // ans:
// function numberSplit(num){
//     let half = num/2
//     let [leftHalf,rightHalf] = [Math.floor(num/2),Math.ceil(num/2)]
//     return num % 2 === 0 ? [half,half] : [leftHalf,rightHalf]
// }

// console.log(numberSplit(4)) //➞ [2, 2]
// console.log(numberSplit(10)) //➞ [5, 5]
// console.log(numberSplit(11)) //➞ [5, 6]
// console.log(numberSplit(-9)) //➞ [-5, -4]


// --------------------------------------------------------------------------------------------------------
//16)=> Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.
// Examples
// sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

// sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

// sortNumsAscending(null) ➞ []

// sortNumsAscending([]) ➞ []

// function sortNumsAscending(arr){
//     return arr.sort(function(a,b){
//         return a-b
//     })
// }

// console.log(sortNumsAscending([1, 2, 10, 50, 5]))// ➞ [1, 2, 5, 10, 50]
// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]))// ➞ [-95, -24, 4, 29, 80, 85]
// console.log(sortNumsAscending(null))// ➞ []
// console.log(sortNumsAscending([]))// ➞ []