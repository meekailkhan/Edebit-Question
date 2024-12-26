// 1.Question)=> Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// Examples
// console.log(sumArray([1, 2, 3])) //➞ 6
// // // 1 + 2 + 3 = 6

// console.log(sumArray([1, [2, [1]], 3])) //➞ 7
// // 1 + 2 + 1 + 3 = 7
// Notes
// The item in an array can be another array.

function sumArray(arr){
    let res = 0;
    arr.flat(Infinity).map(item => res += item);
    return res
}

function sumArray(arr){
    if(arr.length === 0) return 0;
    let res = 0;
    if(Array.isArray(arr[0])){
        res += sumArray(arr[0]);
    }else{
        res += arr[0]
    }

    return res+sumArray(arr.slice(1))
    
}

function sumArray(arr){
    let res = arr.join("").split(",").join("").split('').reduce((acc,val)=>{
        acc += +val
        return acc
    },0)
    return res 
}

function sumArray(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            res += sumArray(arr[i])
        }else{
            res += arr[i]
        }
    }
    return res
}

function sumArray(arr){
    let res = arr.reduce((acc,val)=>{
        if(Array.isArray(val)){
            acc += sumArray(val)
        }else{
            acc += val
        }
        return acc
    },0)
    return res    
}

function* flatedArr(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            yield* flatedArr(arr[i])
        }else{
            yield arr[i]
        }
    }
}

function sumArray(arr){
    let res = 0;
    for(let item of flatedArr(arr)){
        res += item
    }
    return res
}

function sumArray(arr){
    let res = 0;
    let stack = [...arr];
    while(stack.length > 0){
        let item = stack.pop();
        if(Array.isArray(item)){
            stack.push(...item)
        }else{
            res += item
        }
    }
    return res
}
// ----------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// // Examples
// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)) //➞ 8
// // // The number 3 was found at indexes 1, 2 and 5.
// // // 8 = 1 + 2 + 5

// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)) //➞ 2

// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100)) //➞ 10

// console.log(sumFoundIndexes([5, 10, 15, 20], 2)) //➞ 0
// Notes
// 0 can be the result if no number in the array matches or if the only matching element is at index 0.
function sumFoundIndexes(arr,num){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === num){
            res += i
        }
    }
    return res
}

function sumFoundIndexes(arr,num){
    let res = 0;
    arr.map((item,index)=>{
        if(item === num){
            res += index
        }
    })
    return res
}

function sumFoundIndexes(arr,num){
    let res = arr.reduce((acc,val,i)=>{
        if(val === num){
            acc += i
        }
        return acc
    },0)
    return res
}
function sumFoundIndexes(arr,num,i=0){
    if(arr.length === 0) return 0;
    let res = 0;
    if(arr[0] === num){
        res += i
    }
    i += 1
    return res+sumFoundIndexes(arr.slice(1),num,i)
}

// -----------------------------------------------------------------------------------------------------------------
// 3.Question)=> Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// Examples
// console.log(sumOfEvens([
//   [1, 0, 2],
//   [5, 5, 7],
//   [9, 4, 3]
// ]) ) //➞ 6

// // 2 + 4 = 6

// console.log(sumOfEvens([
//   [1, 1],
//   [1, 1]
// ])) //➞ 0

// console.log(sumOfEvens([
//   [42, 9],
//   [16, 8]
// ])) //➞ 66

// console.log(sumOfEvens([
//   [],
//   [],
//   []
// ])) //➞ 0
// // Notes
// Submatrices will be of equal length.
// Return 0 if the 2D matrix only consists of empty submatrices.
function sumOfEvens(arr){
    let res = 0;
    arr.flat().map(item => item % 2== 0 ? res += item : item)
    return res
}

function sumOfEvens(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        for(let val of arr[i]){
            val % 2 === 0 ? res += val : val
        }
    }
    return res
}

function sumOfEvens(arr){
    let res = arr.flat().reduce((acc,val)=>{
        val % 2 === 0 ? acc += val : val;
        return acc;
    },0)
    return res
}

function sumOfEvens(arr){
    if(arr.length === 0 ) return 0;
    let res = 0 ;
    for(let val of arr[0]){
        val % 2 === 0 ? res += val : val;
    }
    return res + sumOfEvens(arr.slice(1))
}

function sumOfEvens(arr){
    let res = 0;
    let i = 0;
    while(i < arr.length){
        for(let val of arr[i]){
            val % 2 === 0 ? res += val : val;
        }
        i++
    }
    return res
}

function* evenNumbers(arr){
    for(let row of arr){
        for(let val of row){
            if(val % 2 === 0) {
                yield val
            }
        }
    }
}

function sumOfEvens(arr){
    let res = 0;
    for(let val of evenNumbers(arr)){
        res += val
    }
    return res
}
//----------------------------------------------------------------------------------------------------------------------------
// 4.Question)=> Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
// ➞ true

// // Agatha's pieces: [4, 3], [2, 4], [1, 2]
// // Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// // Total area of Agatha's chocolate
// // 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// // Total area of Bertha's chocolate is:
// // 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22
// // Examples
// console.log(testFairness([[1, 2], [2, 1]], [[2, 2]])) //➞ true

// console.log(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]])) //➞ false

// console.log(testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]])) //➞ true

// console.log(testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]])) //➞ false
// Notes
// N/A
function testFairness(arr1,arr2){
    let num1 = 0;
    let num2 = 0;
    for(let val of arr1){
        num1 += (val[0]*val[1])
    }
    for(let val of arr2){
        num2 += (val[0]*val[1])
    }
    return num1 === num2
}


function testFairness(arr1,arr2){
    const pices = (pices)=>{
        return pices.reduce((acc,[n1,n2])=>{
            acc += (n1 * n2)
            return acc
        },0)
    }

    const num1 = pices(arr1);
    const num2 = pices(arr2);
    return num1 === num2
}

// ----------------------------------------------------------------------------------------------------------------------
// 5.Question)=> Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// Examples
// console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //➞ [10, -65]
// // // There are a total of 10 positive numbers.
// // // The sum of all negative numbers equals -65.

// console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])) //➞ [7, -252]

// console.log(countPosSumNeg([91, -4, 80, -73, -28])) //➞ [2, -105]

// console.log(countPosSumNeg([])) //➞ []
// Notes
// If given an empty array, return an empty array: []
// 0 is not positive.
function countPosSumNeg(arr){
    if(arr.length === 0) return []
    let res = [0,0];
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] > 0 ? res[0]++ : res[1] += arr[i]
    }
    return res
}
function countPosSumNeg(arr){
    if(arr.length === 0) return []
    let res =  arr.reduce((acc,val)=>{
        val > 0 ? acc[0]++ : acc[1] += val;
        return acc
    },[0,0])
    return res
}
// ------------------------------------------------------------------------------------------------------------
// 6.Question)=> Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// Examples
// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])) //➞ [5, 9]
// // // 5 has neighbours 4 and 2, both are less than 5.

// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])) //➞ [2, 3, 5]

// console.log(miniPeaks([1, 2, 3, 4, 5, 6])) //➞ []
// Notes
// Do not count boundary numbers, since they only have one left/right neighbor.
// If no such numbers exist, return an empty array.
function miniPeaks(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            res.push(arr[i])
        }
    }
    return res
}

function miniPeaks(arr){
    let res = arr.reduce((acc,val,i)=>{
        if(val > arr[i-1] && val > arr[i+1]){
            acc.push(val)
        }
        return acc
    },[]);
    return res
}
// ----------------------------------------------------------------------------------------------------------------------
// 7.Question)=> Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

// Examples
// console.log(measureDepth([])) //➞ 1

// console.log(measureDepth([[]])) //➞ 2

// console.log(measureDepth([[[]]])) //➞ 3

// console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])) //➞ 11
// Notes
// For a bonus challenge, try to find a solution without recursion.
function measureDepth(arr){
    if(arr.length === 0) return 1;
    let res = 1;
    let innerArray = arr[0];
    return res + measureDepth(innerArray)
}

// -----------------------------------------------------------------------------------------------------------------------
// 8.Question)=> Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// // A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

// Examples
// console.log(subset([1, 3], [1, 3, 3, 5])) //➞ true

// console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //➞ true

// console.log(subset([1, 3], [1, 33])) //➞ false

// console.log(subset([1, 3, 10], [10, 8, 8, 8])) //➞ false
// Notes
// Each input array will have at least one element.
// Check the resources tab for a hint.
function subset(arr1,arr2){
    return arr2.includes(arr1)
}
// --------------------------------------------------------------------------------------------------
// 9.Question)=> Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// Examples
// console.log(spinAround(["right", "right", "right", "right", "left", "right"])) //➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

// console.log(spinAround(["left", "right", "left", "right"])) //➞ 0

// console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"])) //➞ 2

// console.log(spinAround(["left", "left", "left", "left"])) //➞ 1
// Notes
// Return a positive number.
// All tests will only include the words "right" and "left".
function spinAround(arr){
    let totalDegree = 0;
    for(let i = 0 ; i < arr.length ; i++){
        totalDegree += arr[i] === "right" ? 90 : -90; 
    }
    let res = Math.abs(Math.floor(totalDegree/360));
    return res
}

function spinAround(arr){
    let totalDegree = arr.reduce((acc,val)=>{
        acc += (val === "right" ? 90 : -90);
        return acc
    },0);

    let res = Math.abs(Math.floor(totalDegree/360));
    return res
}

function spinAround(arr,totalDegree=0){
    if(arr.length === 0) return Math.floor(Math.abs(totalDegree/360));
    totalDegree += arr[0] === "right" ? 90 : -90;
    return spinAround(arr.slice(1),totalDegree)
}
// ---------------------------------------------------------------------------------------------------------------
// 10.Question)=> Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// Examples
// console.log(backToHome("EEWE")) //➞ false

// console.log(backToHome("NENESSWW")) //➞ true

// console.log(backToHome("NEESSW")) //➞ false
// Notes
// N/A

function backToHome(str){
    let northSouth = 0;
    let eastWest = 0;

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === "N") northSouth++;
        if(str[i] === "S") northSouth--;
        if(str[i] === "E") eastWest++;
        if(str[i] === "W") eastWest--;
    }

    return northSouth === 0 && eastWest === 0;
}

function backToHome(str){
    let {northSouth,eastWest} = [...str].reduce((acc,val)=>{
        if(val === "N") acc.northSouth++;
        if(val === "S") acc.northSouth--;
        if(val === "E") acc.eastWest++;
        if(val === "W") acc.eastWest--;
        return acc
    },{northSouth:0,eastWest:0})
    return northSouth === 0 && eastWest === 0;
}
// -----------------------------------------------------------------------------------------------------
// 11.Question)=> Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.
// Example
// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6])) //➞ [12, 9]
// // // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6])) //➞ [-12, -9])

// console.log(sumOddAndEven([0, 0])) //➞ [0, 0])
// Notes
// Count 0 as an even number.
function sumOddAndEven(arr){
    let res = [0,0];
    for(let val of arr){
        val % 2 === 0 ? res[0] += val : res[1] += val
    }
    return res
}

function sumOddAndEven(arr){
    let res = arr.reduce((acc,val)=>{
        val % 2 === 0 ? acc[0] += val : acc[1] += val;
        return acc
    },[0,0])
    return res
}
function sumOddAndEven(arr,res=[0,0]){
    if(arr.length === 0) return res;
    arr[0] % 2 === 0 ? res[0] += arr[0] : res[1] += arr[0];
    return sumOddAndEven(arr.slice(1),res)
}
function sumOddAndEven(arr){
    let res = [0,0];
    let i = 0;
    while(i < arr.length){
        arr[i] % 2 === 0 ? res[0] += arr[i] : res[1] += arr[i];
        i++
    }
    return res
}   
// -------------------------------------------------------------------------------------------------------------------------------------------------
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// Examples
// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")) //➞ false

// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6")) //➞ false

// console.log(hasHiddenFee(["$1"], "$4")) //➞ true
// Notes
// Remember that each price is given as a string.
// All $ signs will be at the beginning of the number.
function hasHiddenFee(fees,total){
    let num1 = 0;
    for(let i = 0 ; i < fees.length ; i++){
        num1 += +fees[i].slice(1)
    }
    let num2 = +total.slice(1)

    return num1 !== num2

}
// ------------------------------------------------------------------------------------------------------------------------
// Question)=> Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// Examples
// console.log(incrementToTop([3, 4, 5])) //➞ 3
// // // Maximal element in the array is 5.
// // // To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// // // To transform 4 to 5 requires 1 step: 4 -> 5.
// // // Total steps required is 3.

// console.log(incrementToTop([4, 3, 4])) //➞ 1
// // // Maximal element in the array is 4.
// // // To transform 3 to 4 requires 1 steps: 3 -> 4.
// // // Total steps required is 1.

// console.log(incrementToTop([3, 3, 3])) //➞ 0

// console.log(incrementToTop([3, 10, 3])) //➞ 14
// Notes
// If the array contains only the same digits, return 0 (see example #3).
// Bonus: Can you write a solution that achieves this by only traversing the array once? (i.e. without finding the max beforehand)
function incrementToTop(arr){
    let maxValue = Math.max(...arr);
    let steps = 0;
    for(let num of arr){
        steps += maxValue - num;
    }
    return steps
}
// ------------------------------------------------------------------------------------------------------------------------------
// Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// Examples
// console.log(diceGame([[1, 2], [3, 4], [5, 6]])) //➞ 21

// console.log(diceGame([[1, 1], [5, 6], [6, 4]])) //➞ 0

// console.log(diceGame([[4, 5], [4, 5], [4, 5]])) //➞ 27
// Notes
// Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
// John only has two dice and will always give you outcomes for three rounds.
function diceGame(arr){
    let count = 0;
    for(let round of arr){
        let [dice1,dice2] = round;
        if(dice1 === dice2){
            return 0
        }
        count += (dice1 + dice2)
    }
    return count
}

// --------------------------------------------------------------------------------------------------------
// Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// Examples
console.log(simonSays([1, 2], [5, 1])) //➞ true

console.log(simonSays([1, 2], [5, 5])) //➞ false

console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])) //➞ true

console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])) //➞ false
// Notes
// Both input arrays will be of the same length, and will have a minimum length of 2.
// The values of the 0-indexed element in the second list and the n-1th indexed element in the first list do not matter.
function simonSays(arr1,arr2){
    for(let i = 0 ; i < arr1.length-1 ; i++){
        if(arr1[i] !== arr2[i + 1]){
            return false
        }
    }
    return true
}

function simonSays(arr1,arr2){
    if(arr1.length === 1) return true
    if(arr1[0] !== arr2[1]){
        return false
    }
    return simonSays(arr1.slice(1),arr2.slice(1))
}