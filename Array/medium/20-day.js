// Superheroes
// Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

// Examples
// console.log(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]))
// // ➞ ["Batman", "Spider-man", "Superman"]

// console.log(superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman", "Hawkeye"]))
// // ➞ ["Aquaman"]

// console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]))
// // ➞ []
// Notes
// Wonder-Woman, Catwoman and Invisible-Woman are superheroines.

function superheroes(heroes){
    let onlyHeros = heroes.filter(item => !item.includes('woman') && !item.includes('Woman')).filter(item => item.includes('man')).sort()
    return onlyHeros
}

function superheroes(heroes){
    let onlyHeros = [];
    for(let i = 0 ; i < heroes.length ; i++){
        if(!heroes[i].endsWith('Woman') && !heroes[i].endsWith('woman')){
            if(heroes[i].endsWith('man')){
                onlyHeros.push(heroes[i])
            }
        }
    }
    return onlyHeros.sort()
}
// -----------------------------------------------------------------------
// Balancing Scales
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

// Examples
// console.log(scaleTip([0, 0, "I", 1, 1])) //➞ "right"
// // // 0 < 2 so it will tip right

// console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])) //➞ "left"
// // // 6 > 4 so it will tip left

// console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])) //➞ "balanced"
// // // 15 = 15 so it will stay balanced
// Notes
// The middle element will always be "I" so you can just ignore it.
// Assume the numbers all represent the same unit.
// Both sides will have the same number of elements.
// There are no such things as negative weights in both real life and the tests!
function scaleTip(arr){
    let numArr = arr.filter(item => typeof item === 'number')
    let right = 0;
    let left = 0;
    for(let i = 0 ; i < numArr.length ; i++){
        if(i < numArr.length/2){
            left += numArr[i]
        }else {
            right += numArr[i]
        }
    }
    if(right > left){
        return 'right'
    }else if(left > right){
        return 'left'
    }else{
        return 'balanced'
    }
}

// ---------------------------------------------------------------
// Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Examples
// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4])) // ➞ 3

// console.log(findSingleNumber([2])) // ➞ 2

// console.log(findSingleNumber([])) // ➞ null

// console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13])) // ➞ 8

// console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2])) // ➞ 101
// Notes
// Don't forget to return the result.
// Be aware this challenge includes two validations:
// Empty input should return null (example #3).
// Single item arrays should return that item (example #2).
// There are always 1 or 0 unique numbers in the input. No two or three+ uniques.
// If you're stuck or your solution is over complicated check the Resources tab.
function findSingleNumber(arr){
    if(arr.length === 0) return null
    let obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] in obj){
            obj[arr[i]] = obj[arr[i]] + 1
        }else{
            obj[arr[i]] = 1
        }
    }
    return Object.keys(obj).find(val => obj[val] === 1)
}
