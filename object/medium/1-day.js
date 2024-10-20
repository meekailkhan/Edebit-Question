// 1.Question)=> Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
console.log(addName({}, "Brutus", 300)) //➞ { Brutus: 300 }

console.log(addName({ piano: 500 }, "Brutus", 400)) //➞ { piano: 500, Brutus: 400 }

console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) //➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.
function addName(obj,key,value){
    obj[key] = value
    return obj
}
function addName(obj,key,value){
    return {...obj, [key] :value}
}

function addName(obj,key,value){
    return Object.assign({},obj,{[key]:value})
}
function addName(obj,key,value){
    let newObj = {};
    for(let keys in obj){
        newObj[keys] = obj[keys]
    }
    newObj[key] = value;
    return newObj
}
function addName(obj,key,value){
    let newObj = JSON.parse(JSON.stringify(obj));
    
    newObj[key] = value;

    return newObj
}

function addName(obj,key,value){
    let arr = Object.keys(obj);
    return arr.reduce((acc,val)=>{
        acc[val] = obj[val];
        return acc
    },{key : value})
}