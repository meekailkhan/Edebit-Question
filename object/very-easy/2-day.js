// 11.Question)=> Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// console.log(nSidedShape(3)) //➞ "triangle"

// console.log(nSidedShape(1)) //➞ "circle"

// console.log(nSidedShape(9)) //➞ "nonagon"
// // Notes
// There won't be any tests with a number below 1 or greater than 10.
// Return the output in lowercase.
// The challenge is intended to be completed without conditionals (it would take too long)!
function nSidedShape(n) {
    switch (n) {
        case 1:
            return "circle";
        case 2:
            return "sami-circle";
        case 3:
            return "triangle";
        case 4:
            return "square";
        case 5:
            return "pentagon";
        case 6:
            return "hexagon";
        case 7:
            return "heptagon";
        case 8:
            return "octagon";
        case 9:
            return "nonagon";
        case 10:
            return "decagon";
        default:
            return "shape doesnt find"

    }
}

function nSidedShape(n) {
    return ["circle", "semi-circle", "triangl", "square", "pentagon", "hexagon", "haptagon", "octagon", "nonagon", "decagon"][n - 1]
}
// ----------------------------------------------------------------------------------------------------------------------
// 12.Question)=> First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// Examples
// console.log(determineLever(["e", "f", "l"])) //➞ "first class lever"

// console.log(determineLever(["e", "l", "f"])) //➞ "second class lever"

// console.log(determineLever(["f", "e", "l"])) //➞ "third class lever"
// Notes
// A pair of scissors is a first class lever, a nutcracker is a second class lever and a broom is a third class lever.
function determineLever(arr) {
    let obj = {
        "e,f,l": "first class lever",
        "e,l,f": "second class lever",
        "f,e,l": "third class lever"
    }

    return obj[arr.join(",")]
}

function determineLever(arr) {
    if (arr[1] == "f") {
        return "first class lever"
    } else if (arr[2] == "f") {
        return "second class lever"
    } else {
        return "third class lever"
    }
}

function determineLever(arr) {
    switch (arr.join(",")) {
        case "e,f,l":
            return "first class lever";
        case "e,l,f":
            return "second class lever";
        default:
            return "third class lever"

    }
}

// --------------------------------------------------------------------------------------------------------------------
// 13.Question)=> Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"
// Examples

class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge() {
        return `${this.name} is age ${this.age}`
    }
    getHeight() {
        return `${this.name} is ${this.height}cm`
    }
    getWeight() {
        return `${this.name} is weighs ${this.weight}kg`
    }
}

p1 = new Player("David Jones", 25, 175, 75)

// console.log(p1.getAge()) //➞ "David Jones is age 25"
// console.log(p1.getHeight()) //➞ "David Jones is 175cm"
// console.log(p1.getWeight()) //➞ "David Jones weighs 75kg"
// Notes
// name will be passed in as a string and age, height and weight will be integers.

// ------------------------------------------------------------------------------------------------------------
// 14.Question)=> Check if Number is within a Given Range
// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

// Examples
// console.log(isInRange(4, { min: 0, max: 5 })) //➞ true

// console.log(isInRange(4, { min: 4, max: 5 })) //➞ true

// console.log(isInRange(4, { min: 6, max: 10 })) //➞ false

// console.log(isInRange(5, { min: 5, max: 5 })) //➞ true
// Notes
// Numbers can be positive or negative, and they may not be integers.
// You can assume min <= max is always true.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function isInRange(num, { min, max }) {
    if (num >= min && num <= max) {
        return true
    } else {
        return false
    }
}
function isInRange(num, { min, max }) {
    return num >= min && num <= max ? true : false;
}

function isInRange(num, obj) {
    if (num >= obj.min && num <= obj.max) {
        return true
    } else {
        return false
    }
}
// -----------------------------------------------------------------------------------
// 15.Question)=> Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

// Examples
// { piano: 100, tv: 50 } ➞ { piano: 100, tv: 50 }

function ObjCreator(obj) {
    return obj
}
// ------------------------------------------------------------------------------------------------------
// 16.Question)=> Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

// Examples
// console.log(concatenates({ 1: "Mommy", 2: "please", 3: "help" })) //➞ "Mommy please help please"

// console.log(concatenates({ 1: "Me", 2: "innocent", 3: "is" })) //➞ "Me innocent is innocent"

// console.log(concatenates({ 1: "Must", 2: "lawyer", 3: "call" })) //➞ "Must lawyer call lawyer"
// Notes
// The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
// I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
// Check the Resources for tips if needed.
function concatenates(obj) {
    return `${obj[1]} ${obj[2]} ${obj[3]} ${obj[2]}`
}

var object = { "a": 1 }
var other = { "a": 1 }
isEqual(object, other)
// returns true
object === other
// returns false