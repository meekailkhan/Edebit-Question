// 1.Question)=> Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// Examples
console.log(removeEnemies(["Fred"], [])) //➞ ["Fred"]

console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])) //➞ ["Adam", "Tanya"]

console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])) //➞ ["Emily", "Steve"]
// Notes
// All names to be removed will be in the enemies array; simply return the array, no fancy strings.
function removeEnemies(arr1,arr2){
    let res = [];
    for(let val of arr1){
        if(!arr2.includes(val)){
            res.push(val)
        }
    }
    return res
}

function removeEnemies(arr1,arr2){
    return arr1.filter(item => !arr2.includes(item))
}

function removeEnemies(arr1,arr2){
    return arr1.reduce((acc,val)=>{
        if(!arr2.includes(val)){
            acc.push(val)
        }
        return acc
    },[])
}