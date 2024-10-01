// 1.Question)=> Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Examples
console.log(spelling("bee")) //➞ ["b", "be", "bee"]

console.log(spelling("happy")) //➞ ["h", "ha", "hap", "happ", "happy"]

console.log(spelling("eagerly")) //➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
// Notes
// N/A

// function spel(spelLen){
//     let res = "";
// }

function spelling(str){
    let arr = [];
    for(let i = 0 ; i < str.length ; i++){
        let res = "";
        for(let j = 0 ; j <= i ; j++){
            res += str[j]
        }
        arr.push(res)
    }
    return arr
}

function spelling(str){
    let arr = [];
    for(let i = 1 ; i <= str.length ; i++){
        arr.push(str.substring(0,i))
    }
    return arr
}

function spelling(str){
    return str.split("").map((_,index) => str.slice(0,index+1))
}

function spelling(str,i=1,result=[]){
    if(i > str.length) return result;
    result.push(str.substring(0,i));
    return spelling(str ,i+1,result)
}