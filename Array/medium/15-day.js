// 1.Question)=> Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// console.log(sumArray([1, 2, 3])) //➞ 6
// // // 1 + 2 + 3 = 6

// console.log(sumArray([1, [2, [1]], 3])) //➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.

function sumArray(arr){
    let res = 0;
    arr.flat(Infinity).map(item => res += item);
    return res
}

function sumArray(arr){
    if(arr.length === 0) return 0;
    let res = 0;
    if(Array.isArray(arr[0])){
        res += sumArray(arr[0]);
    }else{
        res += arr[0]
    }

    return res+sumArray(arr.slice(1))
    
}

function sumArray(arr){
    let res = arr.join("").split(",").join("").split('').reduce((acc,val)=>{
        acc += +val
        return acc
    },0)
    return res 
}

function sumArray(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            res += sumArray(arr[i])
        }else{
            res += arr[i]
        }
    }
    return res
}

function sumArray(arr){
    let res = arr.reduce((acc,val)=>{
        if(Array.isArray(val)){
            acc += sumArray(val)
        }else{
            acc += val
        }
        return acc
    },0)
    return res    
}

function* flatedArr(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            yield* flatedArr(arr[i])
        }else{
            yield arr[i]
        }
    }
}

function sumArray(arr){
    let res = 0;
    for(let item of flatedArr(arr)){
        res += item
    }
    return res
}

function sumArray(arr){
    let res = 0;
    let stack = [...arr];
    while(stack.length > 0){
        let item = stack.pop();
        if(Array.isArray(item)){
            stack.push(...item)
        }else{
            res += item
        }
    }
    return res
}
// ----------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// // Examples
// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)) //➞ 8
// // // The number 3 was found at indexes 1, 2 and 5.
// // // 8 = 1 + 2 + 5

// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)) //➞ 2

// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100)) //➞ 10

// console.log(sumFoundIndexes([5, 10, 15, 20], 2)) //➞ 0
// Notes
// 0 can be the result if no number in the array matches or if the only matching element is at index 0.
function sumFoundIndexes(arr,num){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === num){
            res += i
        }
    }
    return res
}

function sumFoundIndexes(arr,num){
    let res = 0;
    arr.map((item,index)=>{
        if(item === num){
            res += index
        }
    })
    return res
}

function sumFoundIndexes(arr,num){
    let res = arr.reduce((acc,val,i)=>{
        if(val === num){
            acc += i
        }
        return acc
    },0)
    return res
}
function sumFoundIndexes(arr,num,i=0){
    if(arr.length === 0) return 0;
    let res = 0;
    if(arr[0] === num){
        res += i
    }
    i += 1
    return res+sumFoundIndexes(arr.slice(1),num,i)
}

// -----------------------------------------------------------------------------------------------------------------
// 3.Question)=> Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
console.log(sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]) ) //➞ 6

// 2 + 4 = 6

console.log(sumOfEvens([
  [1, 1],
  [1, 1]
])) //➞ 0

console.log(sumOfEvens([
  [42, 9],
  [16, 8]
])) //➞ 66

console.log(sumOfEvens([
  [],
  [],
  []
])) //➞ 0
// Notes
// Submatrices will be of equal length.
// Return 0 if the 2D matrix only consists of empty submatrices.
function sumOfEvens(arr){
    let res = 0;
    arr.flat().map(item => item % 2== 0 ? res += item : item)
    return res
}

function sumOfEvens(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        for(let val of arr[i]){
            val % 2 === 0 ? res += val : val
        }
    }
    return res
}

function sumOfEvens(arr){
    let res = arr.flat().reduce((acc,val)=>{
        val % 2 === 0 ? acc += val : val;
        return acc;
    },0)
    return res
}

function sumOfEvens(arr){
    if(arr.length === 0 ) return 0;
    let res = 0 ;
    for(let val of arr[0]){
        val % 2 === 0 ? res += val : val;
    }
    return res + sumOfEvens(arr.slice(1))
}

function sumOfEvens(arr){
    let res = 0;
    let i = 0;
    while(i < arr.length){
        for(let val of arr[i]){
            val % 2 === 0 ? res += val : val;
        }
        i++
    }
    return res
}

function* evenNumbers(arr){
    for(let row of arr){
        for(let val of row){
            if(val % 2 === 0) {
                yield val
            }
        }
    }
}

function sumOfEvens(arr){
    let res = 0;
    for(let val of evenNumbers(arr)){
        res += val
    }
    return res
}
