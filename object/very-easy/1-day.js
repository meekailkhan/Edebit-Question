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
const obj = { noChanges: true }

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

console.log(preventChanges(obj))