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
    for(let  i=0;str[i];i++){
        lastIndex = i+1
    }
    return lastIndex
}
// console.log(length("Hello World")) //➞ 11
// console.log(length("Edabit")) //➞ 6
// console.log(length("wash your hands!")) //➞ 16
// ------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.
function halfQuarterEighth(num){
    let half = num/2;
    let quarter = half/2;
    let eighth = quarter/2;
    return [half,quarter,eighth];
}
// console.log(halfQuarterEighth(6)) //➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)) //➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)) //➞ [12.5, 6.25, 3.125]
// --------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"

// nSidedShape(1) ➞ "circle"

// nSidedShape(9) ➞ "nonagon"
function nSidedShape(n){
    let arr = ["circle","semi-circle","triangle","square","pentagon","hexagon","heptagon","octagon","nonagon","decagon"];
    return arr[n-1]
}
// console.log(nSidedShape(3)) //➞ "triangle"
// console.log(nSidedShape(1)) //➞ "circle"
// console.log(nSidedShape(9)) //➞ "nonagon"
// ------------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
// Notes
// No test case will contain punctuation.
// Arrays can be of various lengths.
function eachLength(str){
    return str.length
}

function wordLengths(arr){
    let lengthArr = [];
    for(let i=0;i<arr.length;i++){
        lengthArr.push(eachLength(arr[i]))
    }
    return lengthArr;
}
function wordLengths(arr){
    return arr.map(item => item = item.length)
}
function wordLengths(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i].length
    }
    return arr;
}

// console.log(wordLengths(["hello", "world"])) //➞ [5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) //➞ [9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) //➞ [3, 5, 9, 4, 2, 3, 8]
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.
function toNumberArray(arr){
    return arr.map(item => item = +item)
}

function toNumberArray(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = +arr[i];
    }
    return arr;
}

// console.log(toNumberArray(["9.4", "4.2"])) //➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])) //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])) //➞ [9.5, 8.8]
// ---------------------------------------------------------------------------------------------------------------
// Question)=> Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]

// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]
// Notes
// You'll only get numbers in the array.

function addIndexes(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = arr[i]+i
    }
    return arr;
}

function addIndexes(arr){
    return arr.map((item,index) => item = item+index)
}

// console.log(addIndexes([0, 0, 0, 0, 0])) //➞ [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5])) //➞ [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1])) //➞ [5, 5, 5, 5, 5]
// --------------------------------------------------------------------------------------------------------------------------------
// Question)=> Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252
// Notes
// Find all the elements greater than 5, not the elements greater than or equal to 5.

function sumFive(arr){
    let res = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>5){
            res += arr[i]
        }
    }
    return res;
}

function sumFive(arr){
    let res = 0;
    arr.map(item => item>5 ? res+= item : res)
    return res;
}

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18])) //➞ 77
// console.log(sumFive([1, 2, 3, 4])) //➞ 0
// console.log(sumFive([10, 12, 28, 47, 55, 100])) //➞ 252