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
// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])) //➞ [1, 3]

// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])) //➞ [3, 5]

// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5])) //➞ [10, 6, 13, 5]
// // Notes
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

function uniqueArr(arr) {
    let res = arr.reduce((acc, val) => {
        if (!acc.includes(val) && val > 0) {
            acc.push(val)
        }
        return acc
    }, [])

    return res
}
// // --------------------------------------------------------------------------------------------------------------
// 4.Question)=> Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

// Examples
// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])) 
// // ➞ ["aaaaaa", "d", "eeee"]

// console.log(identicalFilter(["88", "999", "22", "545", "133"])) 
// // ➞ ["88", "999", "22"]

// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])) 
// // ➞ []
// Notes
// A string with a single character is trivially counted as a string with repeating identical characters.
// If there are no strings with repeating identical characters, return an empty array (see example #3).

function identicalFilter(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i].split("");
        if (elem.length === 1) {
            res.push(arr[i])
        } else if (elem.every(item => item === elem[0])) {
            res.push(arr[i])
        }
    }
    return res
}

function identicalFilter(arr) {
    if (arr.length === 0) return [];
    let res = [];
    let elem = arr[0].split("");
    if (elem.length === 1) {
        res.push(arr[0]);
    } else if (elem.every(item => elem[0] === item)) {
        res.push(arr[0])
    }
    return res.concat(identicalFilter(arr.slice(1)));
}

// -------------------------------------------------------------------------------------------------------------------
// 5.Question)=> Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// Examples
// console.log(reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
// ])) //➞ [
// //   [0, 1, 1],
// //   [1, 0, 1],
// //   [1, 1, 0]
// // ]

// console.log(reverseImage([
//     [1, 1, 1],
//     [0, 0, 0]
// ])) //➞ [
// //   [0, 0, 0],
// //   [1, 1, 1]
// // ]

// console.log(reverseImage([
//     [1, 0, 0],
//     [1, 0, 0]
// ])) //➞ [
// //   [0, 1, 1],
// //   [0, 1, 1]
// ]
// Notes
// N/A
function reverseImage(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = [];
        for (let j = 0; j < arr[i].length; j++) {
            elem.push(Math.abs(arr[i][j] - 1))
        }
        res.push(elem)
    }
    return res
}

function reverseImage(arr) {
    let res = arr.map(item => item.map(subItem => subItem === 0 ? 1 : 0))
    return res
}

function reverseImage(arr){
    let res = arr.reduce((acc,val)=>{
        acc.push(val.map(item => 1 - item))
        return acc
    },[])
    return res
}

function reverseImage(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[i].length ; j++){
            arr[i][j] = 1- arr[i][j]
        }
    }
    return arr
}
// -----------------------------------------------------------------------------------------------------------------
// 6.Question)=> Record Temperatures
// You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.

// [[record low, record high], ...]
// The current week array contains the daily low/high temperatures for each day of the current week.

// [[daily low, daily high], ...]
// A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.

// Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.

// There may be multiple record temperatures in a week.
// If there are no broken records return the original records array.
// Example
// //             sun       mon      tues       wed      thur      fri       sat
// console.log(recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
//             [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]))

// ➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
// The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.

// Notes
// There won't be a record high and record low set on the same day.
// Index 0 will always be the low and index 1 will always be the high [low, high].
// For reference these temps are °F but you do not need to convert any temperatures.
function recordTemps(records,currentWeek){
    for(let i = 0 ; i < records.length ; i++){
        if(currentWeek[i][0]  < records[i][0]){
            records[i][0] = currentWeek[i][0]
        }
        if(currentWeek[i][1] > records[i][1]){
            records[i][1] = currentWeek[i][1]
        }
    }
    return records
}

function recordTemps(records,currentWeek){
    let res = records.map((item,index)=>{
        let newlow = Math.min(item[0],currentWeek[index][0]);
        let newhigh = Math.max(item[1],currentWeek[index][0]);
        return [newlow,newhigh]
    })

    return res
}

function recordTemps(records,currentWeek){
    let res = records.reduce((acc,val,i)=>{
        let newLow = Math.min(val[0],currentWeek[i][0]);
        let newhigh = Math.max(val[1],currentWeek[i][1]);
        acc.push([newLow,newhigh]);
        return acc
    },[])
    return res
}
function recordTemps(records,currentWeek){
    if(records.length === 0) return [];
    let res = [];
    let newLow = Math.min(records[0][0],currentWeek[0][0]);
    let newhigh = Math.max(records[0][1],currentWeek[0][1]);
    res.push([newLow,newhigh]);
    return res.concat(recordTemps(records.slice(1),currentWeek.slice(1)));
}

function recordTemps(records,currentWeek){
    let res = records.map(([low,high],i)=>[
        Math.min(low,currentWeek[i][0]),
        Math.max(high,currentWeek[i][1])
    ])
    return res
}
// ------------------------------------------------------------------------------------------------------------
// 7.Question)=> Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
// Examples
console.log(evenOrOdd("22471")) //➞ "Even and Odd are the same"

console.log(evenOrOdd("213613")) //➞ "Even and Odd are the same"

console.log(evenOrOdd("23456")) //➞ "Even is greater than Odd"
// Notes
// The input will be a string of numbers.
function evenOrOdd(str){
    let even = 0;
    let odd = 0;
    for(let i = 0 ; i < str.length ; i++){
        str[i]%2==0? even += +str[i] : odd += +str[i]
    }
    if(even == odd){
        return 'Even and Odd are the same'
    }else{
        return odd > even ? 'Odd is greater than Odd' : 'Even is greater than Odd'
    }
}

function evenOrOdd(str){
    let res = str.split("").reduce((acc,val)=>{
        val%2==0? acc[0] += +val : acc[1] += +val;
        return acc
    },[0,0])
    if(res[0] == res[1]){
        return 'Event and Odd are the same'
    }else{
        return res[0] > res[1] ? 'Even is greater than Odd' : 'Odd is greater than Even';
    }
}

function evenOrOdd(str){
    let [even,odd] = [0,0];
    str.split("").map(item => {
        item % 2=== 0 ? even += +item : odd += +item
    })
    if(even === odd){
        return 'Even and Odd are same'
    }else{
        return even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even'
    }
}

function evenOrOdd(str,even=0,odd=0){
    if(str.length === 0){
        if(even === odd){
            return 'Even and Odd are same'
        }else{
            return even > odd ? 'Even is greater than Odd' : 'Odd is greater tha Even'
        }
    };
    str[0] % 2 === 0 ? even += +str[0] : odd += +str[0];
    return evenOrOdd(str.slice(1),even,odd)
}
// -------------------------------------------------------------------------------------------------------------------