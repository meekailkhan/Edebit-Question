// 1.Quetion)=> Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// console.log(removeDups([1, 0, 1, 0])) //➞ [1, 0]

// console.log(removeDups(["The", "big", "cat"])) //➞ ["The", "big", "cat"]

// console.log(removeDups(["John", "Taylor", "John"])) //➞ ["John", "Taylor"]
// Notes
// Tests contain arrays with both strings and numbers.
// Tests are case sensitive.
// Each array item is unique.
function removeDups(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

function removeDups(arr){
    let res = [];
    arr.map(item => {
        if(!res.includes(item)){
            res.push(item)
        }
    })
    return res
}

function removeDups(arr){
    let res = arr.reduce((acc,val)=>{
        if(!acc.includes(val)){
            acc.push(val)
        }
        return acc
    },[])
    return res
}

function removeDups(arr){
    let res = [];
    for(let val of arr){
        if(!res.includes(val)){
            res.push(val)
        }
    }
    return res
}

function removeDups(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        let isDuplicate = false;
        for(let j = 0 ; j < res.length ;j++){
            if(res[j] === arr[i]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            res.push(arr[i])
        }
    }
    return res
}

function removeDups(arr){
    let res = [];
    let i = 0;
    while(i < arr.length){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
        i++
    }
    return res
}

function removeDups(arr){
    let res = [];
    for(let i in arr){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

function removeDups(arr,res=[]){
    if(arr.length == 0) return res;
    if(!res.includes(arr[0])){
        res.push(arr[0])
    }

    return removeDups(arr.slice(1),res)
}
function removeDups(arr,res=[]){
    if(arr.length === 0 ) return res ;
    let isDuplicate = false;
    for(let i = 0 ; i < res.length ; i++){
        if(arr[0] === res[i]){
            isDuplicate = true
        }
    }
    if(!isDuplicate){
        res.push(arr[0])
    }
    return removeDups(arr.slice(1),res)
}

// ------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// // 3 is a factor of 6
// // 6 is a factor of 12
// // 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

// Examples
console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true

console.log(factorChain([1, 1, 1, 1, 1, 1])) //➞ true

console.log(factorChain([2, 4, 6, 7, 12])) //➞ false

console.log(factorChain([10, 1])) //➞ false
// Notes
// N/A

function factorChain(arr){
   for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i+1] % arr[i] !== 0){
            return false
        }
   }
   return true
}

function factorChain(arr){
    if(arr.length === 1) return true;
    if(arr[1] % arr[0] !== 0) return false
    return factorChain(arr.slice(1))
}

console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true

console.log(factorChain([1, 1, 1, 1, 1, 1])) //➞ true

console.log(factorChain([2, 4, 6, 7, 12])) //➞ false

console.log(factorChain([10, 1])) //➞ false