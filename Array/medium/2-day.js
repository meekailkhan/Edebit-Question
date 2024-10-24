// 1.Question)=> Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// // Examples
// console.log(concat([1, 2, 3], [4, 5], [6, 7])) //➞ [1, 2, 3, 4, 5, 6, 7]

// console.log(concat([1], [2], [3], [4], [5], [6], [7])) //➞ [1, 2, 3, 4, 5, 6, 7]

// console.log(concat([1, 2], [3, 4])) //➞ [1, 2, 3, 4]

// console.log(concat([4, 4, 4, 4, 4])) //➞ [4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.
function concat(...arrays){
    return arrays.flat() 
}
function concat(...arrays){
    return [].concat(...arrays)
}
function concat(...arrays){
    return arrays.reduce((acc,val)=> acc.concat(val),[])
}
function concat(...arrays){
    let res = [];
    for(let array of arrays){
        for(let item of array){
            res.push(item)
        }
    }
    return res
}
function concat(...arrays){
    let res = [];
    arrays.forEach(array => res.push(...array));
    return res
}
function concat(...arrays){
    let res = [];
    for(let i = 0 ; i < arrays.length ; i++){
        res.push(...arrays[i])
    }
    return res
}
// ------------------------------------------------------------------------------------------------------------
// 2.Question)=> Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Examples
// console.log(changeEnough([2, 100, 0, 0], 14.11)) //➞ false

// console.log(changeEnough([0, 0, 20, 5], 0.75)) //➞ true

// console.log(changeEnough([30, 40, 20, 5], 12.55)) //➞ true

// console.log(changeEnough([10, 0, 0, 50], 3.85)) //➞ false

// console.log(changeEnough([1, 0, 5, 219], 19.99)) //➞ false
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01
function changeEnough(arr,num){
    let [quarter,dime,nickel,penny] = arr;
    let total = (quarter * 0.25) + (dime * 0.10) + (nickel * 0.05) + (penny * 0.01);
    return total >= num
}
// ------------------------------------------------------------------------------------------------------------
// 3.Question)=> Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// Examples
console.log(arrayOfMultiples(7, 5)) //➞ [7, 14, 21, 28, 35]

console.log(arrayOfMultiples(12, 10)) //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

console.log(arrayOfMultiples(17, 6)) //➞ [17, 34, 51, 68, 85, 102]
// Notes
// Notice that num is also included in the returned array.
function arrayOfMultiples(num1,num2){
    let res = [];
    let item = num1;
    for(let i = 0 ; i < num2 ; i++){
        res.push(item)
        item += num1
    }
    return res
}

function arrayOfMultiples(num1,num2){
    let res = [];
    for(let i = 1 ; i < num2 ; i++){
        res.push(num1 * i)
    }
    return res
}
function arrayOfMultiples(num1,num2){
    return Array.from({ length:num2 }, (_, i) => num1 * (i + 1));
}

function arrayOfMultiples(num1,num2){
    let res = [];
    let i = 1;
    while(i <= num2){
        res.push(num1 * i)
        i++
    }
    return res
}

function arrayOfMultiples(num1,num2,i=1,res=[]){
    if(i > num2) return res
    res.push(num1 * i);
    return arrayOfMultiples(num1,num2,i+1,res)
}

function arrayOfMultiples(num1,num2){
    return Array(num2).fill().reduce((acc,_,i)=>{
        acc.push(num1 * (i + 1))
        return acc
    },[])
    
}