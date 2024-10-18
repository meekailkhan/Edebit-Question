// 1.Question)=> ES6: Destructuring Objects II

// const obj =  { one : 1, two : 2 }

// var { one, two } = obj

// We can assign variables by the same name properties of objects, but what if I wanted to assign obj.one to a different name like anotherOne?

// Use ES6 object destructuring to assign obj.one to the variable anotherOne. Variable two needs to remain assigned to obj.two. Ignore the .toString() function (used for validation).

// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab, look at some examples and come back to try the challenge.
let obj = {
    one : 1,
    two : 2
};
const {one : anotherOne ,two} = obj;

// console.log(anotherOne); // 1
// console.log(two) // 2
// ---------------------------------------------------------------------------------------------------------------
// 2.Question)=> Find the Bug: Returning Valid Units of Measure
// There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it is either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

// Expected results
// console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" })) //➞ true

// console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" })) //➞ false

// console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false })) //➞ false

// console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" })) //➞ false
// Notes
// Run the tests first to see the results before making changes and understand why eggs is not returning a boolean.
// Why is eggs not returning a boolean?
// When merging conditions through ||, the returned value is the result of the last truthy condition.


function hasValidUnitOfMeasure(product = {}) {
	const { comment, unitOfMeasure } = product
	return (comment || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}
function hasValidUnitOfMeasure({comment,unitOfMeasure}) {
	return (comment || unitOfMeasure === 'L' || unitOfMeasure === 'PCE')
}
function hasValidUnitOfMeasure(obj){
    return (obj["produnct"] || obj.unitOfMeasure === "L" || obj.unitOfMeasure === "PCE")
}
// ---------------------------------------------------------------------------------------------------------------------
// Does the Object Contain a Given Key?
// Write a function that returns true if a hash contains the specified key, and false otherwise.

// Examples
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")) //➞ false

console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning")) //➞ false

console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")) //➞ true
// Notes
// N/A
function hasKey(obj,key){
    let arr = Object.keys(obj);
    return arr.includes(key) ? true : false;
}

function hasKey(obj,key){
    for(let keys in obj){
        if(keys === key){
            return true
        }
    }
    return false
}
// -------------------------------------------------------------------------------------------------------------------------
