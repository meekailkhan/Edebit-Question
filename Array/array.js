// 1)=> Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function isThereSevent(arr){
//     if(arr.join("").includes(7)){
//         return "Boom"
//     }else{
//         return "there is no 7 in arr"
//     }
// }
// function doesContain(num,targetNum){
//     while(num <= 0) {
//         const currentNum = num % 10;
//         if(currentNum == targetNum) {
//             return true;
//         }
//         num = parseInt(num/10);
//     }
//     return false;
// }
// function isThereSevent(arr){
    
//     for(let i=0;i<arr.length;i++){
//         if(doesContain(arr[i], 7)){
//             return "Boom"
//         }
//     }
//     return "there is no 7 in"
// }

// console.log(isThereSevent([1,2,6,8,4,3]))
// console.log(isThereSevent([1,12,3,67,32]))
// console.log(isThereSevent([1,127,3,6,32]))
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
// 		if(arr[i]){
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
// function compact(arr){
//     let res = []
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]){
//             res.push(arr[i])
//         }
//     }
//     return res
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

// function reverse(arr){
//     let res = [];
//     for(let i = arr.length-1;i>=0;i--){
//         res.push(arr[i])
//     }
//     return res
// }

// console.log(reverse([1, 2, 3, 4])) //➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])) // ➞ [4, 3, 2, 9, 9]
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

// Question)=> Create a function that takes an array of numbers and returns the second largest number.

// Examples
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23
// Notes
// There will be at least two numbers in the array.
// ans)=>
// function secondLargest(arr){
//     let result = arr.sort((a,b)=>b-a)
//     return result[1]
// }

// console.log(secondLargest([10, 40, 30, 20, 50])) // ➞ 40
// console.log(secondLargest([25, 143, 89, 13, 105])) // ➞ 105
// console.log(secondLargest([54, 23, 11, 17, 10])) // ➞ 23
// console.log(secondLargest([12,15,34,65,87,43]))
// ----------------------------------------------------------------------------------------------------------------------------

// Question)=> Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.
// ans)=>

// function addName(obj,name,value){
//     obj.name = value
//     return obj
// }

// console.log(addName({}, "Brutus", 300)) // ➞ { Brutus: 300 }
// console.log(addName({ piano: 500 }, "Brutus", 400)) // ➞ { piano: 500, Brutus: 400 }
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) // ➞ { piano: 500, stereo: 300, Caligula: 440 }

// -----------------------------------------------------------------------

// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.
// ans)=>
// function sortIt(arr){
//     return arr.sort((a,b)=>a-b)
// }

// console.log(sortIt([4, 1, 3])) //➞ [1, 3, 4]
// console.log(sortIt([[4], [1], [3]])) // ➞ [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])) // ➞ [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])) // ➞ [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6])) // ➞ [1, [2], [3], 4, [5], 6]

// ----------------------------------------------------------------------------------------------------------------

// Question)=> The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// Examples
// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
// Notes
// N/A

// ans)=>
// function clone(arr){
//     let res = arr;
//     arr.push(res)
//     return arr
// }

// console.log(clone([1, 1])) //➞ [1, 1, [1, 1]]
// console.log(clone([1, 2, 3])) // ➞ [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"])) // ➞ ["x", "y", ["x", "y"]]
// -----------------------------------------------------------------------------------------------------------------------

// Question)=> Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

// testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

// testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

// testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
// ans)=>
// function testJackpot(arr){
//     return arr.every(item => item===arr[0])
// }

// console.log(testJackpot(["@", "@", "@", "@"]))// ➞ true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false
// -----------------------------------------------------------------------------------------------------------------

// Question)=> Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
// ascDesNone([4, 3, 2, 1], "Asc" ) ➞ [1, 2, 3, 4]

// ascDesNone([7, 8, 11, 66], "Des") ➞ [66, 11, 8, 7]

// ascDesNone([1, 2, 3, 4], "None") ➞ [1, 2, 3, 4]

// ans)=>
// function ascDesNone(arr,order){
//     if(order == "Asc" || order == "None"){
//         return arr.sort((a,b)=>a-b)
//     }else if(order == "Des"){
//        return arr.sort((a,b)=>b-a)
//     }
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc" )) // ➞ [1, 2, 3, 4]
// console.log(ascDesNone([7, 8, 11, 66], "Des")) // ➞ [66, 11, 8, 7]
// console.log(ascDesNone([1, 2, 3, 4], "None")) // ➞ [1, 2, 3, 4]
// --------------------------------------------------------------------------------------------------

// Question)=> Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []
// ans)=>
// function jazzify(arr){
//     return arr.map(item => item.endsWith("7")? item: `${item}7`)
// }

// console.log(jazzify(["G", "F", "C"])) //➞ ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([])) // ➞ []
// ---------------------------------------------------------------------------------------------------------

// Question)=> Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.
// ans)=>

// function findIndex(arr,item){
//     return arr.indexOf(item)
// }

// function findIndex(arr,item){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]==item){
//             return i
//         }
//     }
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // ➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // ➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d")) // ➞ 3

// --------------------------------------------------------------------------------------------------------------

// // Question)=> Create a function to concatenate two integer arrays.

// // Examples
// // concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// // concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// // concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
// // Notes
// // Don't forget to return the result.
// // See Resources tab for more info.
// // ans)=>

// // function concat(arr1,arr2){
// //     let res = [arr1,arr2];
// //     return res.flat();
// // }

// function concat(arr1,arr2){
//     let res = [];
//     for(let i=0;i<arr1.length;i++){
//         res.push(arr1[i])
//     }
//     for(let i=0;i<arr2.length;i++){
//         res.push(arr2[i])
//     }
//     return res
// }

// console.log(concat([1, 3, 5], [2, 6, 8])) //➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2])) //➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) //➞ [4, 5, 1, 3, 3, 3, 3, 3]
// --------------------------------------------------------------------------------------------------------

// // Question)=> Write a function to check if an array contains a particular number.

// // Examples
// // check([1, 2, 3, 4, 5], 3) ➞ true

// // check([1, 1, 2, 1, 1], 3) ➞ false

// // check([5, 5, 5, 6], 5) ➞ true

// // check([], 5) ➞ false
// // Notes
// // Don't forget to return the result.
// // If you get stuck on a challenge, find help in the Resources tab.
// // If you're really stuck, unlock solutions in the Solutions tab.
// // ans)=>

// // function check(arr,num){
// //     return arr.includes(num)
// // }

// function check(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num){
//             return true
//         }
//     }
//     return false
// }

// console.log(check([1, 2, 3, 4, 5], 3)) //➞ true
// console.log(check([1, 1, 2, 1, 1], 3)) //➞ false
// console.log(check([5, 5, 5, 6], 5)) //➞ true
// console.log(check([], 5)) //➞ false
// --------------------------------------------------------------------------------------------------------------------

// // Question)=> Create a function that takes an array of numbers or letters and returns a string.

// // Examples
// // arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// // arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// // arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// // Notes
// // ans)=>

// // function arrayToString(arr){
// //     return arr.join("")
// // }

// function arrayToString(arr){
//     let res = ""
//     for(let i=0;i<arr.length;i++){
//         res += arr[i]
//     }
//     return res
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) //➞ "123asdAAAA"
// -------------------------------------------------------------------------------------------------------------------

// // Question)=> Create a function that finds the index of a given item.

// // Examples
// // search([1, 5, 3], 5) ➞ 1

// // search([9, 8, 3], 3) ➞ 2

// // search([1, 2, 3], 4) ➞ -1
// // Notes
// // If the item is not present, return -1.
// // ans)=>
// // function search(arr,num){
// //     return arr.indexOf(num)
// // }

// function search(arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===num){
//             return i
//         }
//     }
//     return -1
// }

// console.log(search([1, 5, 3], 5)) //➞ 1
// console.log(search([9, 8, 3], 3)) //➞ 2
// console.log(search([1, 2, 3], 4)) //➞ -1
// -------------------------------------------------------------------------------------------------------------------------

// // Question)=> Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// // Examples
// // arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// // arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// // arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
// // Notes
// // N/A
// // ans)=>

// // function arrBetween(num1,num2,arr){
// //     return arr.filter(item => item>num1 && item<num2)
// // }

// function arrBetween(num1,num2,arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num1 && arr[i]<num2){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) // ➞ [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) // ➞ [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78])) // ➞ []
// ---------------------------------------------------------------------------------------------

// // Question)=> Given an index and an array, return the value of the array with the given index.

// // Examples
// // valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// // valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// // valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// // Notes
// // Math.floor() can be helpful.
// // ans)=>
// function valueAt(arr,num){
//     let index = eval(num)
//     return arr[Math.floor(index)]
// }

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) // ➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) //➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) // ➞ 4
// ------------------------------------------------------------------------------------------------------------

// // Question)=> Create a function that takes an array and returns the types of values (data types) in a new array.

// // Examples
// // arrayValuesTypes([1, 2, "null", []])
// // ➞ ["number", "number", "string", "object"]

// // arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// // ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// // arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// // ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// // Notes
// // Check the Resources tab for help if needed.
// // Remember Arrays & Null in JS are treated as object, hence the examples
// // ans)=>

// // function arrayValuesTypes(arr){
// //     return arr.map(item => typeof item)
// // }

// function arrayValuesTypes(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         res.push(typeof arr[i])
//     }
//     return res
// }

// console.log(arrayValuesTypes([1, 2, "null", []]))
// // ➞ ["number", "number", "string", "object"]

// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// // ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))
// // ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// -------------------------------------------------------------------------------------------------------------------

// // Qusetion)=> Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// // Examples
// // hasSameBread(
// //   ["white bread", "lettuce", "white bread"],
// //   ["white bread", "tomato", "white bread"]
// // ) ➞ true

// // hasSameBread(
// //   ["brown bread", "chicken", "brown bread"],
// //   ["white bread", "chicken", "white bread"]
// // ) ➞ false

// // hasSameBread(
// //   ["toast", "cheese", "toast"],
// //   ["brown bread", "cheese", "toast"]
// // ) ➞ false
// // Notes
// // The arrays will always be three elements long.
// // The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.
// // ans)=>

// function hasSameBread(arr1,arr2){
//     let index = arr1.length-1
//     return arr1[0]==arr2[0] && arr1[index]==arr2[index]
// }

// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// )) //➞ true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )) //➞ false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// )) //➞ false
// --------------------------------------------------------------------------------------------------------------
// Question)=> Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15

// sumArray([-1, 0, 1]) ➞ 0

// sumArray([0, 4, 8, 12]) ➞ 24
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.
// ans)=>
function sumArray(arr){
    let res = null
    return arr.map(item => res += item)
}
console.log(sumArray([1, 2, 3, 4, 5])) // ➞ 15
console.log(sumArray([-1, 0, 1])) // ➞ 0
console.log(sumArray([0, 4, 8, 12])) // ➞ 24
