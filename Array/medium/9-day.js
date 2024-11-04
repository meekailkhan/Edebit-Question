// 1.Question)=> War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// Examples
// console.log(warOfNumbers([2, 8, 7, 5])) //➞ 2
// // // 2 + 8 = 10
// // // 7 + 5 = 12
// // // 12 is larger than 10
// // // So we return 12 - 10 = 2

// console.log(warOfNumbers([12, 90, 75])) //➞ 27

// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])) //➞ 168
// Notes
// The given array contains only positive integers.

function warOfNumbers(arr) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 === 0 ? even += arr[i] : odd += arr[i]
    }

    return Math.abs(even - odd)
}
function warOfNumbers(arr) {
    let even = 0;
    let odd = 0;
    for (let val of arr) {
        val % 2 == 0 ? even += val : odd += val
    }
    return Math.abs(even - odd)
}
function warOfNumbers(arr) {
    let even = 0;
    let odd = 0;
    arr.map(item => item % 2 === 0 ? even += item : odd += item);
    return Math.abs(even - odd)
}
function warOfNumbers(arr) {
    let even = arr.filter(item => item % 2 === 0).reduce((acc, val) => acc + val, 0);
    let odd = arr.filter(item => item % 2 !== 0).reduce((acc, val) => acc + val, 0);
    return Math.abs(even - odd)
}

function warOfNumbers(arr) {
    let res = arr.reduce((acc, val) => {
        val % 2 === 0 ? acc.even += val : acc.odd += val;
        return acc
    }, { even: 0, odd: 0 })
    return Math.abs(res.even - res.odd)
}

function warOfNumbers(arr) {
    let [even, odd] = [0, 0];
    arr.forEach(item => {
        item % 2 === 0 ? even += item : odd += item
    })
    return Math.abs(even - odd);
}
// ---------------------------------------------------------------------------------
// Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.
// Examples
console.log(uniqueSort([1, 2, 4, 3])) //➞ [1, 2, 3, 4]

console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])) //➞ [1, 2, 3, 4]

console.log(uniqueSort([6, 7, 3, 2, 1])) //➞ [1, 2, 3, 6, 7]
// Notes
// N/A
function uniqueSort(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res.sort((a,b)=>a-b)
}
function uniqueSort(arr){
    let res = arr.reduce((acc,val)=>{
        if(!acc.includes(val)){
            acc.push(val)
        }
        return acc
    },[]);
    return res.sort((a,b)=> a-b)
}
function uniqueSort(arr){
    let res = [];
    for(let val of arr){
        if(!res.includes(val)){
            res.push(val)
        }
    }
    return res.sort((a,b)=> a-b)
}
function uniqueSort(arr){
    let res = [];

    for(let i = 0 ; i < arr.length ; i++){
        let isUnique = true;
        for(let j = 0 ; j < res.length ; j++){
            if(res[j] == arr[i]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            res.push(arr[i])
        }
    }
    return res.sort((a,b)=> a-b)
}
