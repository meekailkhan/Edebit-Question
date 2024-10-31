// Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// A one indicates that a connection is true and a zero indicates a connection is false.

// Here is how the above model might be written out:

// On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
// On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
// On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
// On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
// Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.

// Examples
// Graph Example

// Adjacency Matrix:

// [
//   [ 0, 1, 0, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 1, 0, 1 ],
//   [ 0, 1, 1, 0 ]
// ]
// Nodes 0,1 should return true.
// Nodes 0,2 should return false.
// Graph Example 2

let mat = [
  [ 0, 1, 0, 1, 1 ],
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 1, 0, 0, 1, 0 ]
];
// console.log(matrix(mat,0,3));  // true
// console.log(matrix(mat,1,4));  // false
// console.log(matrix(mat,2,1));  // true
// console.log(matrix(mat,3,1));  // false
// Nodes 0,3 should return true.
// Nodes 1,4 should return false.
// Notes
// Graphs may have between 0 and 25,000 nodes.
// Time Limit: 100 milliseconds.

function matrix(matrix,node1,node2){
    return matrix[node1][node2] === 1;
}

// ---------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Examples
// console.log(multiply([1, 2, 3])(2)) //➞ [2, 4, 6]

// console.log(multiply([4, 6, 5])(10)) //➞ [40, 60, 50]

// console.log(multiply([1, 2, 3])(0)) //➞ [0, 0, 0]
// Notes
// Your function must be called multiply.
function multiply(arr){
    return function (num){
        return arr.map(item => item * num)
    }
}
// ---------------------------------------------------------------------------------
// 3.Question)=> Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// Examples
// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) //➞ 65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) //➞ 62600


function getBudgets(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i].budget
    }
    return res
}

function getBudgets(arr){
    let res = arr.reduce((acc,val)=>{
        acc += val.budget
        return acc
    },0)
    return res
}

function getBudgets(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i].budget
    }
    return res
}

function getBudgets(arr){
    let res = 0;
    for(let val of arr){
        res += val.budget
    }
    return res
}

function getBudgets(arr){
    let res = 0;
    for(let i in arr){
        res += arr[i].budget
    }
    return res
}

function getBudgets(arr){
    if(arr.length === 0) return 0;
    let res = 0;
    res += arr[0].budget;
    return res + getBudgets(arr.slice(1))
}
// ----------------------------------------------------------------------------------------------------------------------
// 4.Question)=> Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// Examples
// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])) //➞ true
// // // The last item is the rest joined.

// console.log(matchLastItem([1, 1, 1, "11"])) //➞ false
// // // The last item should be "111".

// console.log(matchLastItem([8, "thunder", true, "8thundertrue"])) //➞ true
// // Notes
// The array is always filled with items.
function matchLastItem(arr){
    let lastItem = arr.pop();
    let restItem = arr.join("");
    return lastItem == restItem
}

function matchLastItem(arr){
    let restItem = "";
    for(let i = 0 ; i < arr.length-1 ; i++){
        restItem += arr[i] 
    }

    return restItem === arr[arr.length-1]
}
// -------------------------------------------------------------------------------------------------------------------------
// 4.Question)=> Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// Examples
// console.log(ascDesNone([4, 3, 2, 1], "Asc" )) //➞ [1, 2, 3, 4]

// console.log(ascDesNone([7, 8, 11, 66], "Des")) //➞ [66, 11, 8, 7]

// console.log(ascDesNone([1, 2, 3, 4], "None")) //➞ [1, 2, 3, 4]
// Notes
// N/A
function ascDesNone(arr,order){
    if(order === "None") return arr;
    if(order === "Asc"){
        return arr.sort((a,b)=> a-b)
    }else{
        return arr.sort((a,b)=> b-a)
    }
}

function ascDesNone(arr,order){
    switch (order){
        case "Acs":
            return arr.sort((a,b)=> a-b);
        case "Des":
            return arr.sort((a,b)=> b-a)
        default:
            return arr
    }
}
// ---------------------------------------------------------------------------------------------------------------
// 5.Question)=> Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
console.log(numbersSum([1, 2, "13", "4", "645"])) //➞ 3

console.log(numbersSum([true, false, "123", "75"])) //➞ 0

console.log(numbersSum([1, 2, 3, 4, 5, true])) //➞ 15
// Notes
// Check the Resources tab for help.

function numbersSum(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(typeof arr[i] === "number"){
            res += arr[i]
        }
    }
    return res
}

function numbersSum(arr){
    let res = 0;
    arr.map(item => typeof item === "number" ? res += item : item)
    return res
}

function numbersSum(arr){
    let res = arr.reduce((acc,val)=>{
        typeof val === "number" ? acc += val : val;
        return acc
    },0)
    return res
}
function numbersSum(arr){
    let res = arr.filter(item => typeof item === "number").reduce((acc,val)=> acc + val,0)
    return res
}
function numbersSum(arr){
    let res = 0;
    for(let val of arr){
        typeof val === 'number' ? res += val : val;
    }
    return res
}
function numbersSum(arr){
    let res = 0 ;
    for(let i in arr){
        typeof arr[i] === 'number' ? res += arr[i] : i;
    }
    return res
}

function numbersSum(arr){
    let res = 0;
    let i = 0;
    while(i < arr.length){
        typeof arr[i] === 'number' ? res += arr[i] : i
        i++
    }
    return res
}
function numbersSum(arr){
    let res = 0;
    arr.forEach(item => typeof item === "number" ? res += item : item);
    return res
}