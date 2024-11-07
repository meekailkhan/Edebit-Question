// 1.Question)=> Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// console.log(numOfSubbarrays([[1, 2, 3]])) //➞ 1

// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])) //➞ 3

// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])) //➞ 4

// console.log(numOfSubbarrays([1, 2, 3])) //➞ 0
// Notes
// N/A
function numOfSubbarrays(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ;i++){
        if(Array.isArray(arr[i])){
            res++
        }
    }
    return res
}

function numOfSubbarrays(arr){
    let res = 0;
    arr.map(item =>{
        if(Array.isArray(item)){
            res++
        }
    })
    return res
}
function numOfSubbarrays(arr){
    let res = arr.reduce((acc,val)=>{
        if(Array.isArray(val)){
            acc++
        }
        return acc
    },0)
    return res
}

function numOfSubbarrays(arr){
    let res = 0;
    for(let val of arr){
        if(Array.isArray(val)){
            res++
        }
    }

    return res
}

function numOfSubbarrays(arr){
    let res = 0;
    let i = 0;
    while(i < arr.length){
        if(Array.isArray(arr[i])){
            res++
        }
        i++
    }
    return res
}
function numOfSubbarrays(arr){
    if(arr.length === 0) return 0;
    let res = 0;
    if(Array.isArray(arr[0])){
        res++
    }
    return res + numOfSubbarrays(arr.slice(1))
}
// ------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// Worked Example
// parallelResistance([6, 3, 6]) ➞ 1.5

// // 1/RTotal = 1/6 + 1/3 + 1/6
// // 1/RTotal = 2/3
// // RTotal = 3/2 = 1.5
// Examples
console.log(parallelResistance([6, 3])) //➞ 2

console.log(parallelResistance([10, 20, 10])) //➞ 4

console.log(parallelResistance([500, 500, 500])) //➞ 166.6
// // Round to the nearest decimal place
// Notes
// Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
// Round to the nearest decimal place.
// All inputs will be valid.
function parallelResistance(arr){
    let res = 0
    for(let i = 0 ; i < arr.length ; i++){
        res += (1/arr[i])
    }
    let totalRes = 1 / res
    return Math.round(totalRes * 10) /10
}

function parallelResistance(arr){
    let resistance = arr.reduce((acc,val) => acc + (1/val),0);
    let totalRes = 1 / resistance
    return Math.round(totalRes * 10) /10
}