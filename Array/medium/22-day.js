//2.Question)=> Just Find the Vertex
// Today Juan learned to graph quadratic equations, so he chose to speed up the process and avoid having to write a lot of steps in his notebook to find the vertex. Just help him locate the vertex.

// Ok, I am going to give you some advantages. The first is that you will not have to perform so many steps. The equations will have an easy structure to avoid much complexity.

// Here I will leave you a shorter explanation of how we can find the vertex.

// We have the following equation:

// -5x ^ 2 + 50x -120
// Now we apply the formula to locate the vertex:

// -b / (2 * a)
// We divide our second term by 2 multiplied by the first term. Remember to use the negative sign in b. It would look like this:

// -50 / (2 * -5) = 5
// ... The third term will be insufficient in the challenge, but I wanted to add it to see if it complicates you.

// ... Remember to return the result rounded to zero decimals.

// Examples
// console.log(findVertex("-5x + 50x -120")) //➞ 5

// console.log(findVertex("-6x + 36x -72")) //➞ 3

// console.log(findVertex("7x +14x +28")) //➞ -1
// Notes
// List comprehension and unpacking is useful in this challenge :)
function findVertex(str){
    str = str.replace(/\s+/g,"").replace(/\^2/g,"");

    let term = str.replace(/-/g,'+-').split("+").filter(Boolean);
    let a = parseInt(term[0].replace("x",""));
    let b = parseInt(term[1].replace("x",""));

    let vertex = -b / (2 * a)
    return Math.round(vertex)
}
function findVertex(str){
    let arr = str.split(" ").map(item => item.replace("x","")).filter(item => item != "+")
    let a = arr[0];
    let b = arr[1];
    let vertex = -b / (2 * a);
    return Math.round(vertex)
}
// -----------------------------------------------------------------------------------------------------
// 2.Question)=> An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// Examples
// console.log(magnitude([3, 4])) //➞ 5

// console.log(magnitude([0, 0, -10])) //➞ 10

// console.log(magnitude([])) //➞ 0

// console.log(magnitude([2, 3, 6, 1, 8] )) //➞ 10.677078252031311
// Notes
// The array can have any length.
// The input array will contain integers (except for empty array [] ➞ 0).
// Use both .map() and .reduce().
// Don't use Math.hypot().

function magnitude(arr){
    return Math.sqrt(arr.map(item => item * item).reduce((acc,val)=> acc + val ,0))
}

// ------------------------------------------------------------------------------------------------------------
// 3.Question)=> Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// Examples
console.log(isPotentialFriend(
  ["sports", "music", "chess"],
  ["coding", "music", "netflix", "chess"]
)) //➞ true

console.log(isPotentialFriend(
  ["cycling", "technology", "drawing"],
  ["dancing", "drawing"]
)) //➞ false

console.log(isPotentialFriend(
  ["history"],
  ["history"]
)) //➞ true
// Notes
// Arrays of interests may have varied lengths.
function isPotentialFriend(arr1,arr2){
    if(arr1.length===1 && arr2.length===1){
        if(arr1[0] === arr2[0]){
            return true
        }
    }
    let greaterArr = arr1.length > arr2.length ? arr1 : arr2;
    let smallArr = arr1.length < arr2.length ? arr1 : arr2;
    let res = 0;
    for(let i = 0 ; i < smallArr.length ; i++){
        if(greaterArr.includes(smallArr[i])){
            res++
        }
    }
    return res > 1
}