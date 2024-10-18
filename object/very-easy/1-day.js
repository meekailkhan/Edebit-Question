// 1.Question)=>  Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) //➞ 13

// console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) //➞ -31

// console.log(getVoteCount({ upvotes: 132, downvotes: 132 })) //➞ 0
// Notes
// You can expect only positive integers for vote counts.
function getVoteCount(votes){
    return votes.upvotes - votes.downvotes;
}

function getVoteCount({upvotes,downvotes}){
    return upvotes - downvotes
}

class voteCounter{
    constructor(upvotes,downvotes){
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }

    getVoteCount(){
        return this.upvotes - this.downvotes
    }
}

// const vote1 = new voteCounter(13,0).getVoteCount();
// const vote2 = new voteCounter(2,33).getVoteCount();
// const vote3 = new voteCounter(132,132).getVoteCount();
// console.log(vote1);
// console.log(vote2);
// console.log(vote3);

// ------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Burglary Series (19): Prevent Changes
// The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// Examples
// const obj = { noChanges: true }

// preventChanges(obj) {
//   // Write your code here, don't use a return statement

//   obj.noChanges = false;
//   obj.signature = "whatever"
//   return obj;

// }  ➞ { noChanges: true }
// Notes
// If you have suggestions on how to present or further test this challenge please leave me a comment. Thanks!
// This series is part of a collection that focuses on objects. If you are interested in following the breathtaking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that here.
function preventChanges(obj){
    Object.freeze(obj);

    obj.noChanges = false;
    obj.signature = "whatever"
    return obj

}

// console.log(preventChanges(obj));
// -----------------------------------------------------------------------------------------------------------
// 3.Question)=> volume of a Box
// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

// Examples
// console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) //➞ 10

// console.log(volumeOfBox({ width: 4, length: 2, height: 2 })) //➞ 16

// console.log(volumeOfBox({ width: 2, length: 3, height: 5 })) //➞ 30
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

function volumeOfBox(obj){
    let res = obj.width * obj.length * obj.height;
    return res
}

function volumeOfBox({width,length,height}){
    let res = width * length * height;
    return res
}

// ------------------------------------------------------------------------------------------------
// 4.Question)=> 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// console.log(fiftyThirtyTwenty(10000)) //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// console.log(fiftyThirtyTwenty(50000)) //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// console.log(fiftyThirtyTwenty(13450)) //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
// Notes
// N/A

function fiftyThirtyTwenty(budget){
    let obj = {
        "Needs" : budget/100*50,
        "Wants" : budget/100*30,
        "Saving" : budget/100*20 
    }
    return obj
}

// ---------------------------------------------------------------------------------------------
// 6.Question)=> Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// console.log(relationToLuke("Darth Vader")) //➞ "Luke, I am your father."

// console.log(relationToLuke("Leia")) //➞ "Luke, I am your sister."

// console.log(relationToLuke("Han")) //➞ "Luke, I am your brother in law."
// Notes
// N/A
function relationToLuke(str){
    let obj = {
        "Darth Vader" : "Luke, I am your father.",
        "Leia" : "Luke, I am your sister.",
        "Han" : "Luke, I am your brother in law.",
        "R2D2" : "Luke, I am your droid"
    }

    return obj[str]
}

function relationToLuke(str){
    let obj = {
        "Darth Vader" : "father.",
        "Leia" : "sister.",
        "Han" : "brother in law.",
        "R2D2" : "droid"
    }

    return obj[str] ? `Luke, I am your ${obj[str]}` : `Luke, dosent know this person`
}

function relationToLuke(str){
    let obj = {
        "Darth Vader" : "father.",
        "Leia" : "sister.",
        "Han" : "brother in law.",
        "R2D2" : "droid"
    }
    switch(str){
        case "Darth Vader":
        case "Leia":
        case "Han":
        case "droid":
            return `Luke, I am your ${obj[str]}`;
        default:
            return "Luke dont know this person"
    }
}

function relationToLuke(str){
    let obj = {
        "Darth Vader" : "father.",
        "Leia" : "sister.",
        "Han" : "brother in law.",
        "R2D2" : "droid"
    }

    return `Luke, I am your ${obj[str] ??"unknown"}`
}


// ---------------------------------------------------------------------------------------------------
// 7.Question)=> Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// Examples
// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// })) //➞ "Paris has a population of 2,140,526 and is situated in Europe"

// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// })) //➞ "Tokyo has a population of 13,929,286 and is situated in Asia"
// Notes
// Don't add a period at the end.

function cityFacts({name,population,continent}){
    return `${name} has a population of ${population} and is situated in ${continent}`
}
// ---------------------------------------------------------------------------------------------------------------------
// 8.Question)=> Destructuring Assignment
// You can assign variables from arrays like this:

// arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)

// console.log(first) ➞ outputs 1
// console.log(second) ➞ outputs 2
// console.log(third) ➞ outputs 3
// console.log(other) ➞ outputs [4, 5, 6, 7, 8]
// However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).

// Examples
// first ➞ 1

// second ➞ 2

// third ➞ 3

// other ➞ [4, 5, 6, 7, 8]
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.

// Notes
// Your solution should be just One Line of code.
// If your solution is longer than one line of code, please check the Resources tab.
// Another version of this challenge.
let arr = [1,2,3,4,5,6,7,8];
let [first,second,third,...other] = arr

// console.log(first) //➞ outputs 1
// console.log(second) //➞ outputs 2
// console.log(third) //➞ outputs 3
// console.log(other) //➞ outputs [4, 5, 6, 7, 8]
// ---------------------------------------------------------------------------------------------------------
// 9.Question)=> Using basic object destructuring you can assign variables name and email:

// let { name, email } = { name: "John", email: "john@example.com" }

// console.log(name)  // "John"
// console.log(email)  // "john@example.com"
// What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

// let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}

// rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true
// There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.

// Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignment { name, email, rest }. Ignore the .toString() function (used for validation).

// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples

let { name, email, ...rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}

// console.log(name);
// console.log(email);
// console.log(rest)
// ------------------------------------------------------------------------------------------------------------------------
// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// console.log(totalAmountAdjectives({ a: "moron" })) //➞ 1

// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) //➞ 3

// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) //➞ 4
// Notes
// The list will never be empty (no empty object).
function totalAmountAdjectives(obj){
    // let arr = Object.keys(obj);
    // let arr = Object.values(obj)
    let arr = Object.entries(obj)
    return arr.length
}
function totalAmountAdjectives(obj){
    let count = 0;
    for(key in obj){
        count++
    }
    return count
}
// -----------------------------------------------------------------------------------------------------------------
// 10.Question)=> ES6: Destructuring Objects III
const obj =  {two : 2 }

var { one=1, two } = obj

// console.log(one) // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// Notes
// If you know how to use object destructuring, go ahead and complete this challenge, otherwise check the Resources tab for some examples.
// --------------------------------------------------------------------------------------------------------------------------
