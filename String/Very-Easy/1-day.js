// Question)=> Write a function that returns the string "something" joined with a space " " and the given argument a.

// Examples
// giveMeSomething("is better than nothing") ➞ "something is better than nothing"

// giveMeSomething("Bob Jane") ➞ "something Bob Jane"

// giveMeSomething("something") ➞ "something something"
// Notes
// Assume an input is given.
function giveMeSomething(str){
    return `something ${str}`
}
function giveMeSomething(str){
    return "something"+ str
}
// -------------------------------------------------------------------------------------------------------------------
// Question)=> A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// console.log(nameString("Mubashir")) //➞ "MubashirEdabit"

// console.log(nameString("Matt")) //➞ "MattEdabit"

// console.log(nameString("javaScript")) //➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function nameString(str){
    return `${str}Edabit`
}
function nameString(str){
    return str+"Edabit"
}
function nameString(str){
    return str.concat("Edabit")
}
// -----------------------------------------------------------------------------------------------------------------
// Queestion)=> Create a function that takes a boolean variable flag and returns it as a string.

// // Examples
// console.log(boolToString(true)) //➞ "true"

// console.log(boolToString(false)) //➞ "false"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.
function boolToString(bool){
    return String(bool)
}
function boolToString(bool){
    return `${bool}`
}
function boolToString(bool){
    return "".concat(bool)
}
function boolToString(bool){
    return bool+""
}
// ------------------------------------------------------------------------------------------------------------------
// Question)=> Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// Examples
console.log(calculator("23+4")) //➞ 27

console.log(calculator("45-15")) //➞ 30

console.log(calculator("13+2-5*2")) //➞ 5

console.log(calculator("49/7*2-3")) //➞ 11
// Notes
// There will be no brackets in the input line.
// No need to calculate mathematical functions (sin, cos, ln...).
// There are no gaps in the expression.
function calculator(str){
    return eval(str)
}
function calculator(str){
    return Number(str)
}