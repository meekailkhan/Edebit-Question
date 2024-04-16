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

function arrayOfMultiples (num, length) {
	let arr = [];
	for(let i=1;i<length;i++){
		arr.push(num*i)
	}
	return arr
}
console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]

console.log(arrayOfMultiples(12, 10)) //[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]