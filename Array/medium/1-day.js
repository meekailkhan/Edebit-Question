// 1.Question)=> How Much is True?
// Create a function which returns the number of true values there are in an array.

// Examples
// console.log(countTrue([true, false, false, true, false])) //➞ 2

// console.log(countTrue([false, false, false, false])) //➞ 0

// console.log(countTrue([])) //➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
function countTrue(arr){
    let res = arr.filter(item => item == true);
    return res.length
}
function countTrue(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == true){
            res.push(arr[i])
        }
    }
    return res.length
}
function countTrue(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === true){
            res++
        }
    }
    return res
}
function countTrue(arr){
    let res = arr.reduce((acc,val)=>{
        if(val === true){
            return acc + 1
        }else{
            return acc
        }
    },0)

    return res
}
function countTrue(arr){
    let res = 0;
    arr.map(item => item === true ? res++ : res);
    return res
}
function countTrue(arr){
    let res = [];
    arr.map(item => item === true ? res.push(item) : item);
    return res.length
}
// --------------------------------------------------------------------------------
// 2.Question)=> Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// Examples
// console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.
function compact(arr){
    let res = arr.filter(item => Boolean(item) === true);
    return res
}
function compact(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(Boolean(arr[i]) === true){
            res.push(arr[i])
        }
    }
    return res
}

function compact(arr){
    let res = [];
    arr.map(item => Boolean(item) === true ? res.push(item) : item);
    return res
}
function compact(arr){
    let res = arr.reduce((acc,val)=>{
        if(Boolean(val)){
            acc.push(val)
        }
        return acc
        
    },[])
    return res
}
// --------------------------------------------------------------------------------------------------
// 2.Question)=> Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
console.log(toArray({ a: 1, b: 2 })) //➞ [["a", 1], ["b", 2]]

console.log(toArray({ shrimp: 15, tots: 12 })) //➞ [["shrimp", 15], ["tots", 12]]

console.log(toArray({})) //➞ []
// Notes
// Return an empty array if the object is empty.
function toArray(obj){
    return Object.entries(obj)
}
function toArray(obj){
    let keys = Object.keys(obj);
    let value = Object.values(obj);
    let res = [];
    for(let i = 0 ; i < keys.length ; i++){
        res.push([keys[i],value[i]])
    }
    return res
}
function toArray(obj){
    let res = [];
    for(let key in obj){
        res.push([key,obj[key]])
    }
    return res
}