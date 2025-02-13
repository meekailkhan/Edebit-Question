// 1.Question)=> Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// Examples
console.log(checkSum([10, 12, 4, 7, 9, 11], 16)) //➞ [1,2]

console.log(checkSum([4, 5, 6, 7, 8, 9], 13)) //➞ [0,5] 

console.log(checkSum([0, 98, 76, 23], 174)) //➞ [1,2]

console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)) //➞ null

console.log(checkSum([2, 8, 9, 12, 45, 78], 1)) //➞ null
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