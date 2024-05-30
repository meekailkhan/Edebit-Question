// Question)=> Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]

// console.log(minMax([2334454, 5])) //➞ [5, 2334454]

// console.log(minMax([1])) //➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.
function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return [min,max];
}
function minMax(arr){
    let sortedArr = arr.sort((a,b) => a-b)
    return [arr[0],arr[arr.length-1]]
}
// --------------------------------------------------------------------------------------------------------------
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples
console.log(canNest([1, 2, 3, 4], [0, 6])) //➞ true

console.log(canNest([3, 1], [4, 0])) //➞ true

console.log(canNest([9, 9, 8], [8, 9])) //➞ false

console.log(canNest([1, 2, 3, 4], [2, 3])) //➞ false
// Notes
// Note the strict inequality (see example #3).
function canNest(arr1,arr2){
    let min1 = Math.min(...arr1);
    let max1 = Math.max(...arr1);

    let min2 = Math.min(...arr2);
    let max2 = Math.max(...arr2);

    return min1 , max1 , min2 , max2
}