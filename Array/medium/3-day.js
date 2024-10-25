// 1.Question)=> Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// Examples
// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// })) //➞ [["D", 1], ["B", 2], ["C", 3]]

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// })) //➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
// Notes
// N/A
function objectToArray(obj){
    return Object.entries(obj)
}
function objectToArray(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let res = [];
    for(let i = 0 ; i < keys.length ; i++){
        res.push([keys[i],values[i]])
    }
    return res
}
function objectToArray(obj){
    let res = [];
    for(let key in obj){
        res.push([key,obj[key]])
    }
    return res
}
function objectToArray(obj){
    let keys = Object.keys(obj);
    let res = keys.reduce((acc,val)=>{
        acc.push([val,obj[val]]);
        return acc
    },[])

    return res
}
// -----------------------------------------------------------------------------
// 2.Question)=> Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// Examples
console.log(sortIt([4, 1, 3])) //➞ [1, 3, 4]

console.log(sortIt([[4], [1], [3]])) //➞ [[1], [3], [4]]

console.log(sortIt([4, [1], 3])) //➞ [[1], 3, 4]

console.log(sortIt([[4], 1, [3]])) //➞ [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6])) //➞ [1, [2], [3], 4, [5], 6]
// Notes
// To reiterate, elements of the array will be either integers or arrays with a single integer.
function sortIt(arr){
    return arr.sort((a,b)=> a-b)
}
function sortIt(arr) {
    let res = [...arr];
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = 0; j < res.length - 1 - i; j++) {
            if (res[j] > res[j + 1]) {
                let temp = res[j];
                res[j] = res[j + 1];
                res[j + 1] = temp;
            }
        }
    }
    return res;
}
