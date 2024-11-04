// 1.Question)=> Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// // Examples
// console.log(allTruthy(true, true, true)) //➞ true

// console.log(allTruthy(true, false, true)) //➞ false

// console.log(allTruthy(5, 4, 3, 2, 1, 0)) //➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.

function allTruthy(...arg){
    for(let i = 0 ; i < arg.length ; i++){
        if(!Boolean(arg[i])){
            return false
        }
    }
    return true
}
function allTruthy(...arg){
    let arr = [...arg];
    let res = arr.every(item => Boolean(item));
    return res
}
function allTruthy(...arg){
    if(arg.length === 0) return true ;
    if(!arg[0]) return false;
    return allTruthy(...arg.slice(1))
}

function allTruthy(...arg){
    for(let val of arg){
        if(!val){
            return false
        }
    }
    return true
}
function allTruthy(...arg){
    for(let i in arg){
        if(!arg[i]){
            return false
        }
    }
    return true
}
function allTruthy(...arg){
    let arr = [...arg]
    let res = true;
    arr.map(item => {
        if(!item){
            res = false
        }
    })
    return res
}
function allTruthy(...arg){
    let arr = [...arg];
    let res = true;
    arr.forEach(item =>{
        if(!item){
            res = false
        }
    })
    return res
}

// -------------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// Examples
console.log(capMe(["mavis", "senaida", "letty"])) //➞ ["Mavis", "Senaida", "Letty"]

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])) //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])) //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle"
function capMe(arr){
    let res = arr.map(item => item[0].toUpperCase() + item.slice(1).toLowerCase());
    return res
}

function capMe(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(arr[i][0].toUpperCase()+arr[i].slice(1).toLowerCase())
    }
    return res
}
function capMe(arr){
    let res = [];
    arr.forEach(item =>{
        res.push(item[0].toUpperCase() + item.slice(1).toLowerCase())
    })
    return res
}
function capMe(arr){
    let res = [];
    for(let val of arr){
        res.push(val[0].toUpperCase() + val.slice(1).toLowerCase())
    }
    return res
}
function capMe(arr){
    if(arr.length === 0) return []
    let res = [];
    res.push(arr[0][0].toUpperCase()+arr[0].slice(1).toLowerCase())
    return res.concat(capMe(arr.slice(1)))
}