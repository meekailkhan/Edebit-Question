// 1.Question)=> Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

// Examples
// console.log(leftDigit("TrAdE2W1n95!")) //➞ 2

// console.log(leftDigit("V3r1ta$")) //➞ 3

// console.log(leftDigit("U//DertHe1nflu3nC3")) //➞ 1

// console.log(leftDigit("J@v@5cR1PT")) //➞ 5
// Notes
// Each string will have at least two numbers.
// Return the result as an integer.

function leftDigit(str){
    for(let i = 0 ; i < str.length ; i++){
        if(!isNaN(str[i])){
             return Number(str[i])
        }
    }
}

function leftDigit(str){
    let res = str.match(/\d/);
    return parseInt(res[0])
}

function leftDigit(str){
    let res = parseInt([...str].find(char => /\d/.test(char)));
    return res
}

function leftDigit(str){
    let res = parseInt(str.split("").filter(char => /\d/.test(char))[0]);
    return res
}
// ------------------------------------------------------------------------------------------------
// 2.Question)=> Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// console.log(societyName(["Adam", "Sarah", "Malcolm"])) //➞ "AMS"

// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) //➞ "CHLN"

// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) //➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.

function societyName(arr){
    let res = arr.map(item => item[0]);
    return res.sort().join("")
}
// -------------------------------------------------------------------------------------------

// 3.Question)=> Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

// Examples
console.log(convertToDecimal(["1%", "2%", "3%"])) //➞ [0.01, 0.02, 0.03]

console.log(convertToDecimal(["45%", "32%", "97%", "33%"])) //➞ [0.45, 0.32, 0.97, 0.33]

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])) //➞ [0.33, 0.981, 0.5644, 1]
// Notes
// N/A
function convertToDecimal(arr){
    return arr.map(parsatage => parseFloat(parsatage)/100)
}