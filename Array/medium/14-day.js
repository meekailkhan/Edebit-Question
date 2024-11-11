// Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// Examples
console.log(transformUpvotes("6.8k 13.5k")) //➞ [6800, 13500]

console.log(transformUpvotes("5.5k 8.9k 32")) //➞ [5500, 8900, 32]

console.log(transformUpvotes("20.3k 3.8k 7.7k 992")) //➞ [20300, 3800, 7700, 992]
// Notes
// Return the upvotes as an array.
function transformUpvotes(str) {
    let arr = str.split(" ");
    let res = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].includes("k") ? res.push(Number(arr[i].slice(0, -1)) * 1000) : res.push(Number(arr[i]))
    }
    return res
}
function transformUpvotes(str) {
    let res = str.split(" ").reduce((acc, val) => {
        val.includes("k") ? acc.push(Number(val.slice(0, -1)) * 1000) : acc.push(Number(val))
        return acc
    }, [])
    return res
}
// function transformUpvotes(str){
//     let arr = str.split(" ");
//     if(arr.length === 0) return [];
//     let current = arr.shift();
//     let changeCurrent = current.includes("k") ? Number(current.slice(0,-1)*1000) : Number(current);
//     return [changeCurrent].concat(transformUpvotes(arr.join(" ")))
// }


function transformUpvotes(str){
    if(str.length === 1) return [];
    let arr = str.split(" ");
    let res = [];
    arr[0].includes("k") ? res.push(Number(arr[0].slice(0,-1))*1000) : res.push(Number(arr[0]));
    return res.concat(transformUpvotes(arr.join(" ").trim()))
}

