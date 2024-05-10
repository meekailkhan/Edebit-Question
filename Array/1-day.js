// // Question)=> Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// // Examples
// // checkSquareAndCube([4, 8]) ➞ true

// // checkSquareAndCube([16, 48]) ➞ false

// // checkSquareAndCube([9, 27]) ➞ true
// // Notes
// // Remember to return either true or false.
// // All arrays contain two positive numbers.
// // If you're stuck, check the Resources for a hint.
// // ans)=>

function checkSquareAndCube(arr){
    if(Math.sqrt(arr[0])**3 === arr[1]){
        return true;
    }
    return false
}
// console.log(checkSquareAndCube([4, 8])) //➞ true
// console.log(checkSquareAndCube([16, 48])) //➞ false
// console.log(checkSquareAndCube([9, 27])) //➞ true
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
// Notes
// N/A
function length(str){
    let lastIndex ;
    for(let  i=0;str[i];++i){
        lastIndex = i+1
    }
    return lastIndex
}
console.log(length("Hello World")) //➞ 11
console.log(length("Edabit")) //➞ 6
console.log(length("wash your hands!")) //➞ 16