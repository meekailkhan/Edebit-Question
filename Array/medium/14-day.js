// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples
// console.log(transformUpvotes("6.8k 13.5k")) //➞ [6800, 13500]

// console.log(transformUpvotes("5.5k 8.9k 32")) //➞ [5500, 8900, 32]

// console.log(transformUpvotes("20.3k 3.8k 7.7k 992")) //➞ [20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.
function transformUpvotes(str) {
    let arr = str.split(" ");
    let res = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].includes("k") ? res.push(Number(arr[i].slice(0, -1)) * 1000) : res.push(Number(arr[i]))
    }
    return res
}
function transformUpvotes(str) {
    let res = str.split(" ").reduce((acc, val) => {
        val.includes("k") ? acc.push(Number(val.slice(0, -1)) * 1000) : acc.push(Number(val))
        return acc
    }, [])
    return res
}
function transformUpvotes(str) {
    let arr = str.split(" ");
    if (arr.length === 0) return [];
    let current = arr.shift();
    let changeCurrent = current.includes("k") ? Number(current.slice(0, -1) * 1000) : Number(current);
    return [changeCurrent].concat(transformUpvotes(arr.join(" ")))
}


function transformUpvotes(str) {
    if (str.length === 1) return [];
    let arr = str.split(" ");
    let res = [];
    arr[0].includes("k") ? res.push(Number(arr[0].slice(0, -1)) * 1000) : res.push(Number(arr[0]));
    return res.concat(transformUpvotes(arr.join(" ").trim()))
}
// --------------------------------------------------------------------------------------

// 2.Question)=> Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// Examples
// console.log(removeSpecialCharacters("The quick brown fox!")) //➞ "The quick brown fox"

// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")) //➞ "fd76fd-6GvKlO"

// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1")) //➞ "D0nc sed 0di0 du1"
// // Notes
// N/A
function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9\s-_]/g, '');
}

function removeSpecialCharacters(str) {
    let special = '.!@#$%^&*,()'
    let res = ""
    for (let i = 0; i < str.length; i++) {
        if (!special.includes(str[i])) {
            res += str[i]
        }
    }
    return res
}
function removeSpecialCharacters(str) {
    let special = '.!@#$%^&*,() '
    let res = '';
    let i = 0;
    while (i < str.length) {
        if (!special.includes(str[i])) {
            res += str[i]
        }
        i++
    }
    return res
}
function removeSpecialCharacters(str) {
    const matched = str.match(/[a-zA-Z0-9\s-_]/g);
    return matched ? matched.join("") : "";
}


// ------------------------------------------------------------------------------------------------------------
// 3.Question)=> Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// Examples
console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])) //➞ [1, 3]

console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])) //➞ [3, 5]

console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5])) //➞ [10, 6, 13, 5]
// Notes
// Return the elements in the order that they are found in the array.
// Your function should also work for empty arrays.
function uniqueArr(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i]) && arr[i] > 0) {
            res.push(arr[i])
        }
    }
    return res
}

function uniqueArr(arr) {
    let filterArr = arr.filter(item => item > 0);
    let res = new Set(filterArr)
    return Array.from(res)
}

function uniqueArr(arr) {
    return [...new Set(arr.filter(item => item > 0))]
}

function uniqueArr(arr){
    let res = arr.reduce((acc,val)=>{
        if(!acc.includes(val) && val > 0 ){
            acc.push(val)
        }
        return acc
    },[])

    return res
}

