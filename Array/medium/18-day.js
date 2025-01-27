// 1.Question)=> Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples
// console.log(removeEnemies(["Fred"], [])) //➞ ["Fred"]

// console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])) //➞ ["Adam", "Tanya"]

// console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])) //➞ ["Emily", "Steve"]
// Notes
// All names to be removed will be in the enemies array; simply return the array, no fancy strings.
function removeEnemies(arr1,arr2){
    let res = [];
    for(let val of arr1){
        if(!arr2.includes(val)){
            res.push(val)
        }
    }
    return res
}

function removeEnemies(arr1,arr2){
    return arr1.filter(item => !arr2.includes(item))
}

function removeEnemies(arr1,arr2){
    return arr1.reduce((acc,val)=>{
        if(!arr2.includes(val)){
            acc.push(val)
        }
        return acc
    },[])
}
// -----------------------------------------------------------------
//Q.2=>  Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// Examples
// console.log(upwardTrend([1, 2, 3, 4])) //➞ true

// console.log(upwardTrend([1, 2, 6, 5, 7, 8])) //➞ false

// console.log(upwardTrend([1, 2, 3, "4"])) //➞ "Strings not permitted!"

// console.log(upwardTrend([1, 2, 3, 6, 7])) //➞ true
// Notes
// If there is a string element in the array, return "Strings not permitted!".
// The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).
function upwardTrend(arr){
    if(arr.some(item => typeof item == 'string')){
        return 'String not permitted'
    }

    for(let i = 0 ; i < arr.length -1 ; i++){
        if(arr[i] > arr[i+1]){
            return false
        }
    }
    return true
}
// -------------------------------------------------------------------------------------
// Q.3 => Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// // Examples
// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)) //➞ true

// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)) //➞ true

// console.log(checkSum([0, 98, 76, 23], 174)) //➞ true

// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)) //➞ false

// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)) //➞ false
// // Notes
// N/A
function checkSum(arr,n){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if((arr[i] + arr[j]) == n){
                return true
            }
        }
    }
    return false
}

function checkSum(arr,n,iter=arr.length-1){
    if(iter == 0) return false
    for(let i = 0 ; i < arr.length ; i++){
        if((arr[i]+arr[iter])==n){
            return true
        }
    }
    return checkSum(arr,n,iter-1)
}
// -----------------------------------------------------------------------------------------
// Q.4 => Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

// Examples
// console.log(probability([5, 1, 8, 9], 6)) //➞ 50.0

// console.log(probability([7, 4, 17, 14, 12, 3], 16)) //➞ 16.7

// console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)) //➞ 70.0
// Notes
// Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)
// The numbers in the array are uniformly distributed, and have an equal chance of being chosen.
function probability(arr,n){
    let greaterN = arr.filter(item => item >= n);
    let res = 100*greaterN.length / arr.length
    return parseFloat(res.toFixed(1))
}
// -----------------------------------------------------------------------------------------------
// Q.5 => Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// Examples
// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) //➞ true
// // // Your cards can make the number 96
// // // Your opponent can make the number 73
// // // You win the round since 96 > 73

// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])) //➞ true

// console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])) //➞ false

// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])) //➞ false
// Notes
// Return false if you and your opponent reach the same maximum number (see example #4).

function winRound(arr1,arr2){
    let myScore = arr1.sort().join("");
    let opponent = arr2.sort().join("");

    let playerMax = myScore.slice(myScore.length-2,myScore.length) 
    let opponentMax = opponent.slice(opponent.length-2,myScore.length);
    return playerMax > opponentMax
}

// -----------------------------------------------------------------------------------------
// Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// Examples
console.log(squarePatch(3)) //➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

console.log(squarePatch(5)) //➞ [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

console.log(squarePatch(1)) //➞ [
//   [1]
// ]

console.log(squarePatch(0)) //➞ []
// Notes
// n >= 0.
// If n === 0, return an empty array.
function squarePatch(n){
    if(n === 0) return [];
    let res = [];
    for(let i = 0 ; i < n ; i++){
        let subArr = [];
        for(let j = 0 ; j < n ; j++){
            subArr.push(n)
        }
        res.push(subArr)
    }
    return res
}
function squarePatch(n){
    return Array(n).fill(Array(n).fill(n))
}
function squarePatch(n,result=[]){
    if(n === 0) return [];
    if(result.length === n) return result;
    result.push(Array(n).fill(n));
    return squarePatch(n,result)
}