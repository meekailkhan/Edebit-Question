// 1.Quetion)=> Which Generation Are You?
// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// console.log(generation(2, "f")) //➞ "granddaughter"

// console.log(generation(-3, "m")) //➞ "great grandfather"

// console.log(generation(1, "f")) //➞ "daughter"
// Notes
// Check the Resources tab for helpful hints.

// Generation	Male	Female
// -3	great grandfather	great grandmother
// -2	grandfather	grandmother
// -1	father	mother
// 0	me!	me!
// 1	son	daughter
// 2	grandson	granddaughter
// 3	great grandson	great granddaughter


function generation(x, y) {
    let obj = {
        "f": {
            "-3": "great grandmother",
            "-2": "grandmother",
            "-1": "mother",
            "0": "me!",
            "1": "daughter",
            "2": "granddaughter",
            "3": "great granddaughter"
        },
        "m": {
            "-3": "great grandfather",
            "-2": "grandfather",
            "-1": "father",
            "0": "me!",
            "1": "son",
            "2": "grandson",
            "3":"great grandson"
        }
    }
    return obj[y][x]
}

function generation(x, y){
    if(x === 0){
        return "me!"
    }else if(x === 1){
        return y == "m" ? "son" : "daughter";
    }else if(x === 2){
        return y == "m" ? "grandson" : "granddaughter"
    }else if(x === 3){
        return y == "m" ? "great grandson" : "great granddauther";
    }else if(x === -1){
        return y == "m" ? "father" : "mother"
    }else if(x === -2){
        return y == "m" ? "grandfather" : "grandmother"
    }else if(x === -3){
        return y == "m" ? "great grandfather" : "great grandmother"
    }
}
// ------------------------------------------------------------------------------------
// 2.Question)=> Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// console.log(toArray({ a: 1, b: 2 })) //➞ [["a", 1], ["b", 2]]

// console.log(toArray({ shrimp: 15, tots: 12 })) //➞ [["shrimp", 15], ["tots", 12]]

// console.log(toArray({})) //➞ []
// Notes
// Return an empty array if the object is empty.
function toArray(obj){
    return Object.entries(obj)
}
function toArray(obj){
    let res = [];
    for(let key in obj){
        res.push(key,obj[key])
    }
    return res
}

function toArray(obj){
    let res = [];
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for(let i = 0 ; i < keys.length ; i++){
        res.push([keys[i],values[i]])
    }
    return res
}
// -----------------------------------------------------------------------------------------------------------------
// 3.Question)=> Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

// Examples
class Circle{
    constructor(radius){
        this.radius = radius
    }

    getArea(){
        return Math.PI * Math.pow(this.radius,2)
    }
    getPerimeter(){
        return 2 * Math.PI * this.radius
    }
}

let circy1 = new Circle(11)
console.log(circy1.getArea())

// Should return 380.132711084365
let circy2 = new Circle(4.44)
console.log(circy2.getPerimeter())

// // Should return 27.897342763877365
// Notes
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.
