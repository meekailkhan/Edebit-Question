// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
// console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]))
// //  ➞ [["Elise", "John"], ["Mary", "Rick"]]

// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]))
// //  ➞ "sizes don't match"

// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))
//  ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
// Notes
// N/A
function zipIt(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return `size don't match`
    }
    let res = [];
    for (let i = 0; i < arr1.length; i++) {
        res.push([arr1[i], arr2[i]])
    }
    return res
}

function zipIt(arr1, arr2) {
    if (arr1.length === 0) return [];
    if (arr1.length !== arr2.length) {
        return `size don't match`
    }
    let res = [];
    res.push([arr1[0], arr2[0]]);
    return res.concat(zipIt(arr1.slice(1), arr2.slice(1)))

}
// ---------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.
// Examples
// console.log(evenOddTransform([3, 4, 9], 3)) //➞ [9, -2, 15]
// // // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// console.log(evenOddTransform([0, 0, 0], 10)) //➞ [-20, -20, -20]

// console.log(evenOddTransform([1, 2, 3], 1)) //➞ [3, 0, 5]
// // Notes
// N/A
function evenOddTransform(arr, num) {
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[j] % 2 == 0 ? arr[j] -= 2 : arr[j] += 2
        }
    }
    return arr
}
function evenOddTransform(arr, num) {
    for (let i in arr) {
        if (arr[i] % 2 === 0) {
            arr[i] -= (num * 2)
        } else {
            arr[i] += (num * 2)
        }
    }
    return arr
}

function evenOddTransform(arr, num) {
    let res = arr.map(item => item % 2 !== 0 ? item += (num * 2) : item -= (num * 2))
    return res
}

function evenOddTransform(arr, num) {
    let res = arr.reduce((acc, val) => {
        val % 2 !== 0 ? acc.push(val += (num * 2)) : acc.push(val -= (num * 2));
        return acc
    }, [])
    return res
}
function evenOddTransform(arr, num) {
    if (arr.length === 0) return [];
    let res = [];
    arr[0] % 2 !== 0 ? res.push(arr[0] += (num * 2)) : res.push(arr[0] -= (num * 2));
    return res.concat(evenOddTransform(arr.slice(1),num))
}
// -----------------------------------------------------------------------------------------------

