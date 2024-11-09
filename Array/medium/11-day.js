// H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples
// console.log(hackerSpeak("javascript is cool")) //➞ "j4v45cr1pt 15 c00l"

// console.log(hackerSpeak("programming is fun")) //➞ "pr0gr4mm1ng 15 fun"

// console.log(hackerSpeak("become a coder")) //➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.
function hackerSpeak(str){
    let res = str.replace(/a/g,"4")
              .replace(/e/g,"3")
              .replace(/i/g,"1")
              .replace(/o/g,"0")
              .replace(/s/g,"5");
    return res
}
function hackerSpeak(str){
    let res = '';
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] == "a"){
            res += "4"
        }else if(str[i]== "e"){
            res += "3"
        }else if(str[i] == "i"){
            res += "1"
        }else if(str[i] == "o"){
            res += "0"
        }else if(str[i] == "s"){
            res += "5"
        }else{
            res += str[i]
        }
    }
    return res
}

function hackerSpeak(str){
    let res = '';
    for(let i = 0 ; i < str.length ; i++){
        switch(str[i]){
            case "a" :
                res += "4";
                break;
            case "e" :
                res += "3";
                break;
            case "i" :
                res += "1" ;
                break;
            case "s" :
                res += "5";
                break;
            default :
            res += str[i]
        }
    }
    return res
}

function hackerSpeak(str){
    if(str.length === 0) return "";
    let res = ''
    switch(str[0]){
        case "a" :
            res += "4";
            break;
        case "e" :
            res += "3";
            break;
        case "i" :
            res += "1" ;
            break;
        case "o" :
            res += "0";
            break;
        case "s" :
            res += "5";
            break;
        default :
        res += str[0]
    }

    return res + hackerSpeak(str.slice(1))
}
// --------------------------------------------------------------------------------------------------------
// Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// Examples
// console.log(reverseArr(1485979)) //➞ [9, 7, 9, 5, 8, 4, 1]

// console.log(reverseArr(623478)) //➞ [8, 7, 4, 3, 2, 6]

// console.log(reverseArr(12345)) //➞ [5, 4, 3, 2, 1]
// Notes
// N/A
function reverseArr(num){
    return String(num).split("").reverse().map(item => +item)
}
function reverseArr(num){
    let str = String(num);
    let res = [];
    for(let i = str.length-1 ; i >=0 ; i--){
        res.push(Number(str[i]))
    }
    return res
}
// ------------------------------------------------------------------------------------------------
// Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// Examples
console.log(findNaN([1, 2, NaN])) //➞ 2

console.log(findNaN([NaN, 1, 2, 3, 4])) //➞ 0

console.log(findNaN([0, 1, 2, 3, 4])) //➞ -1
// Notes
// NaN will occur in the input array only once.

function findNaN(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(isNaN(arr[i])){
            return i
        }
    }
    return -1
}

function findNaN(arr){
    for(let i in arr){
        if(Object.is(NaN,arr[i])){
            return +i
        }
    }
    return -1
}
// -------------------------------------------------------------------------------------------------------------------