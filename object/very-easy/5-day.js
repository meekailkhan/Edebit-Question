// 1.Question)=> Calculate the Profit
// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

// Examples
// console.log(profit({
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// })) //➞ 14796

// console.log(profit({
//   costPrice: 225.89,
//   sellPrice: 550.00,
//   inventory: 100
// })) //➞ 32411

// console.log(profit({
//   costPrice: 2.77,
//   sellPrice: 7.95,
//   inventory: 8500
// })) //➞ 44030
// Notes
// Assume all inventory has been sold.
// Profit = Total Sales - Total Cost
function profit({costPrice,sellPrice,inventory}){
    let totalCost = costPrice * inventory;
    let totalSales = sellPrice * inventory;
    let profit = totalSales - totalCost;
    return Math.round(profit)
}

function profit(obj){
    let totalCost = obj.costPrice * obj.inventory;
    let totalSales = obj.sellPrice * obj.inventory;
    let profit = totalSales - totalCost;
    return Math.round(profit)
}
// -------------------------------------------------------------------------------------------------------------------
// 2.Question)=> Is the Object Empty?
// Write a function that returns true if an object is empty, and false otherwise.

// Examples
console.log(isEmpty({})) //➞ true

console.log(isEmpty({ a: 1 })) //➞ false
// Notes
// N/A
function isEmpty(obj){
    let arr = Object.keys(obj);
    return arr.length === 0;
}

function isEmpty(obj){
    let arr = Object.values(obj);
    return arr.length === 0;
}
function isEmpty(obj){
    let arr = Object.entries(obj);
    return arr.length === 0;
}

function isEmpty(obj){
    let count = 0;
    for(let keys in obj){
        count++
    }
    return count === 0;
}
// ----------------------------------------------------------------------------------------------------------------------