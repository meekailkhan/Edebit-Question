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

;
function sumFoundIndexes(arr,num,i=0){
    if(arr.length === 0) return 0;
    let res = 0;
    if(arr[0] === num){
        res += i
    }
    i += 1
    return res+sumFoundIndexes(arr.slice(1),num,i)
}