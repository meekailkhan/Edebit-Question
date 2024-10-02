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
// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
console.log(fiftyThirtyTwenty(10000)) //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

console.log(fiftyThirtyTwenty(50000)) //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

console.log(fiftyThirtyTwenty(13450)) //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
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
