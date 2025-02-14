// 1.Question)=> Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Examples
// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)) //➞ [1,2]

// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)) //➞ [0,5] 

// console.log(checkSum([0, 98, 76, 23], 174)) //➞ [1,2]

// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)) //➞ null

// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)) //➞ null
// Notes
// N/A
function checkSum(arr,target){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i ; j < arr.length ; j++){
            if(arr[i] + arr[j] === target){
                return [i,j]
            }
        }
    }
    return null
}
// -------------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.
// Examples
console.log(numObj([118, 117, 120])) //➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

console.log(numObj([101, 121, 110, 113, 103])) //➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

console.log(numObj([118, 103, 110])) //➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]
// Notes
// All inputs will be an array of numbers.
// All character codes are valid lower case letters.
// The input array will not be empty.
