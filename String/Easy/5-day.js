// 1.Question)=> Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).

// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.

// Examples
// console.log(isPrefix("automation", "auto-")) //➞ true

// console.log(isSuffix("arachnophobia", "-phobia")) //➞ true

// console.log(isPrefix("retrospect", "sub-")) //➞ false

// console.log(isSuffix("vocation", "-logy")) //➞ false
// Notes
// The prefix and suffix arguments have dashes - in them.

function isPrefix(str,prefix){
    let a = prefix.slice(0,-1);
    let res = str.includes(a);
    return res
}
function isSuffix(str,suffix){
    let a = suffix.slice(1);
    let res = str.includes(a);
    return res
}

function isPrefix(str,prefix){
    return str.startsWith(prefix.slice(0,-1))
}
function isSuffix(str,suffix){
    return str.endsWith(suffix.slice(1))
}

function isPrefix(str,prefix){
    return str.substring(0,prefix.length-1) === prefix.slice(0,-1)
}
function isSuffix(str,suffix){
    return str.substring(str.length - suffix.length+1) === suffix.slice(1)
}

// ------------------------------------------------------------------------------------------------
// Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

// Examples
console.log(cardHide("1234123456785678")) //➞ "************5678"

console.log(cardHide("8754456321113213")) //➞ "************3213"

console.log(cardHide("35123413355523")) //➞ "**********5523"
// Examples
// Ensure you return a string.
// The length of the string must remain the same as the input.

function cardHide(str){
    let res = "";
    for(let i = 0 ; i < str.length ; i++){
        if(i < str.length-4){
            res += "*"
        }else{
            res += str[i]
        }
    }
    return res
}

function cardHide(str){
    return str.slice(-4).padStart(str.length,"*")
}
