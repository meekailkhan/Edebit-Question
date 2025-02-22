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
// // Examples
// console.log(numObj([118, 117, 120])) //➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

// console.log(numObj([101, 121, 110, 113, 103])) //➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

// console.log(numObj([118, 103, 110])) //➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]
// Notes
// All inputs will be an array of numbers.
// All character codes are valid lower case letters.
// The input array will not be empty.
function numObj(arr){
    let obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        obj[arr[i]] = String.fromCharCode(arr[i])
    }
    return obj
}
// ----------------------------------------------------------------------------------------------------------
// Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

// Examples
// console.log(flash([3, "*", 7])) //➞ 21

// console.log(flash([5, "+", 7])) //➞ 12

// console.log(flash([10, "-", 9])) //➞ 1

// console.log(flash([10, "/", 0])) //➞ undefined

// console.log(flash([10, "/", 3])) //➞ 3.33
// Notes
// Flash cards contain only zero or positive numbers.
function flash(arr){
    let res = arr.join('');
    return eval(res)
}
// --------------------------------------------------------------------------------------
// Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples
// console.log(isPotentialFriend(
//   ["sports", "music", "chess"],
//   ["coding", "music", "netflix", "chess"]
// )) //➞ true

// console.log(isPotentialFriend(
//   ["cycling", "technology", "drawing"],
//   ["dancing", "drawing"]
// )) //➞ false

// console.log(isPotentialFriend(
//   ["history"],
//   ["history"]
// )) //➞ true
// Notes
// Arrays of interests may have varied lengths.
function isPotentialFriend(arr1,arr2){
    let res = 0;
    if(arr1.length == 1 && arr2.length == 1){
        return arr1.includes(arr2[0])
    }
    let lengthyArr = arr1.length > arr2.length ? arr1 : arr2;
    let smallArr = arr1.length < arr2.length ? arr1 : arr2
    for(let i = 0 ; i < lengthyArr.length ; i++){
        if(smallArr.includes(lengthyArr[i])){
            res++
        }
    }
    return res > 1
}
// ------------------------------------------------------------------------------------------------------------------
// String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// Examples
console.log(strMatchBy2char("yytaazz", "yyjaaz")) //➞ 3

console.log(strMatchBy2char("edabit", "ed")) //➞ 1

console.log(strMatchBy2char("", "")) //➞ 0
// Notes
// Don't forget to return the result.
function strMatchBy2char(str1,str2){
    let count = 0;
    let minLength = Math.min(str1.length, str2.length);
    for(let i = 0 ; i < minLength ; i++){
        if(str1[i] + str1[i+1] === str2[i] + str2[i+1]){
            count++
        }
    }
    return count
}