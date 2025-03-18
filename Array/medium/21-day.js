// 1.Question)=> Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples
console.log(mostExpensiveItem({
  piano: 2000,
})) // ➞ "piano"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
})) // ➞ "tv"

console.log(mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
})) // ➞ "stereo"
// Notes
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).
function mostExpensiveItem(obj){
    let arr = Object.entries(obj);
    return arr.sort((a,b)=> b[1] - a[1])[0][0]
}

function mostExpensiveItem(obj){
    let arr = Object.keys(obj)
    let item = arr[0]
    for(let i = 0 ; i < arr.length ;i++){
        if(obj[item] < obj[arr[i]]){
            item = arr[i]
        }
    }
    return item

}