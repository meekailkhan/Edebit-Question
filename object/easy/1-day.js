// 1.Quesion)=> You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples
// console.log(sortDrinkByPrice(drinks)) //➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
// Notes
// N/A
function sortDrinkByPrice(arr) {
    let res = arr.sort((a, b) => a.price - b.price)
    return res
}
function sortDrinkByPrice(arr) {
    let a = arr[0];
    let b = arr[1];
    if (a.price > b.price) {
        [a, b] = [b, a]
    }
    return [a, b]
}
function sortDrinkByPrice(arr) {
    let a = arr[0];
    let b = arr[1];
    if (a.price > b.price) {
        a = arr[1];
        b = arr[0];
    }
    return [a, b]
}
// ------------------------------------------------------------------------------------------------------
// 2.Question)=> Slightly Superior
// You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

// Create a function that returns whether the first array is slightly superior to that of the second.

// Examples
// console.log(isFirstSuperior([1, 2, 4], [1, 2, 3])) //➞ true
// // // The pair of items at each index are compared in turn.
// // // 1 from the first array is the same as 1 from the second array.
// // // 2 is the same as 2.
// // // However, 4 is greater than 3, so first array is superior.

// console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])) //➞ true

// console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])) //➞ true

// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])) //➞ false

// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])) //➞ false
// Notes
// Both arrays will be the same length.
// All values and their counterparts will always be of the same data type.
// If the two arrays are the same, return false.
function isFirstSuperior(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[i]) {
            return true
        }
    }
    return false
}
function isFirstSuperior(arr1, arr2) {
    let res = arr1.map((item, index) => item > arr2[index] ? true : false)
    return res.includes(true)
}
function isFirstSuperior(arr1, arr2) {
    return arr1 > arr2
}
function isFirstSuperior(arr1, arr2) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr1.length; i++) {
        a += arr1[i];
        b += arr2[i]
    }
    return a > b
}
function isFirstSuperior(arr1, arr2) {
    let a = arr1.reduce((acc, val) => acc + val, 0);
    let b = arr2.reduce((acc, val) => acc + val, 0);
    return a > b
}
// --------------------------------------------------------------------------------------------------------------------
// 3.Question)=> Burglary Series (20): Sign Your Name
// The police send you the electronic statement again for you to sign. This time you are able to sign it and, to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still protected against new entries...

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object, prevent new properties from being added to that object, but you should still be able to change the value of the existing properties.

// Examples
const obj = { yourSignature: "" };

function signYourName(obj){
    Object.seal(obj)

    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try";
    return obj;

} 

console.log(signYourName(obj))//➞ { yourSignature: "Whatever" }
// Notes
// If you have suggestions on how to present or further test this challenge please leave a comment.
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
