// 1.Question)=> Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// Examples
// const first = factory(15)
// // returns a function first.

// const arr = [30, 45, 60]
// // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

// console.log(first(arr)) // [2, 3, 4]
// const second = factory(2)
// // returns a function second.

// const arr = [2, 4, 6]
// // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

// second(arr) ➞ [1, 2, 3]
// Notes
// Rounding not required.

function factory(inputNum){
    return (arr)=>{
        return arr.map(item => item / inputNum)
    }
}
function factory(inputNum){
    return (arr)=>{
        let res = [];
        for(let i = 0 ; i < arr.length ; i++){
            res.push(arr[i]/inputNum);
        }
        return res
    }
}
// ------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Mirror Array
// Given an integer array, transform that array into a mirror.

// Examples
console.log(mirror([0, 2, 4, 6])) //➞ [0, 2, 4, 6, 4, 2, 0]

console.log(mirror([1, 2, 3, 4, 5])) //➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(mirror([3, 5, 6, 7, 8])) //➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
// Notes
// Do not repeat the last item of the given array.
function mirror(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(arr[i])
    }
    for(let i = arr.length-2 ; i >= 0 ; i--){
        res.push(arr[i])
    }
    return res
}


function mirror(arr){
    return [...arr,...arr.slice(0,-1).reverse()]
}

function mirror(arr){
    let reverseArr = arr.slice(0,-1).reverse();
    return arr.concat(reverseArr)
}
function mirror(arr){
    let reversedArr = arr.slice(0,-1).reduceRight((acc,val)=>{
        acc.push(val);
        return acc
    },[]);
    return arr.concat(reversedArr)
}

function mirror(arr){
    let res = [];
    arr.forEach(item => {
        res.push(item)
    });
    arr.slice(0,-1).reverse().forEach(item => res.push(item))
    return res
}

function mirror(arr){
    let orgArr = arr.map(item => item);
    let revArr = arr.slice(0,-1).map((_,i)=> arr[arr.length - 2 -i]);
    return orgArr.concat(revArr)
}