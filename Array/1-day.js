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
function sporter(str){
    return str.length
}

function wordLengths(arr){
    let lengthArr = [];
    for(let i=0;i<arr.length;i++){
        lengthArr.push(sporter(arr[i]))
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