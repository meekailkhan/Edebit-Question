// 1.Question)=> Most Left Digit
// Write a function that takes a string as an argument and returns the left most digit in the string.

// Examples
// console.log(leftDigit("TrAdE2W1n95!")) //➞ 2

// console.log(leftDigit("V3r1ta$")) //➞ 3

// console.log(leftDigit("U//DertHe1nflu3nC3")) //➞ 1

// console.log(leftDigit("J@v@5cR1PT")) //➞ 5
// Notes
// Each string will have at least two numbers.
// Return the result as an integer.

function leftDigit(str){
    for(let i = 0 ; i < str.length ; i++){
        if(!isNaN(str[i])){
             return Number(str[i])
        }
    }
}

function leftDigit(str){
    let res = str.match(/\d/);
    return parseInt(res[0])
}

function leftDigit(str){
    let res = parseInt([...str].find(char => /\d/.test(char)));
    return res
}

function leftDigit(str){
    let res = parseInt(str.split("").filter(char => /\d/.test(char))[0]);
    return res
}
// ------------------------------------------------------------------------------------------------
// 2.Question)=> Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// Examples
// console.log(societyName(["Adam", "Sarah", "Malcolm"])) //➞ "AMS"

// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) //➞ "CHLN"

// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) //➞ "CJMPRR"
// Notes
// The secret society's name should be entirely uppercased.

function societyName(arr){
    let res = arr.map(item => item[0]);
    return res.sort().join("")
}
// -------------------------------------------------------------------------------------------

// 3.Question)=> Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

// Examples
// console.log(convertToDecimal(["1%", "2%", "3%"])) //➞ [0.01, 0.02, 0.03]

// console.log(convertToDecimal(["45%", "32%", "97%", "33%"])) //➞ [0.45, 0.32, 0.97, 0.33]

// console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"])) //➞ [0.33, 0.981, 0.5644, 1]
// // Notes
// // N/A
function convertToDecimal(arr){
    return arr.map(parsatage => parseFloat(parsatage)/100)
}

function convertToDecimal(arr){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(parseFloat(arr[i])/100)
    }
    return res
}
// -----------------------------------------------------------------------------------------------------
// 4.Question)=> Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// Examples
console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])) //➞ ".286"

console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])) //➞ ".350"

console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])) //➞ ".273"
// Notes
// The number of hits will not exceed the number of official at-bats.
// The array includes official at-bats only. No other plate-appearances (walks, hit-by-pitches, sacrifices, etc.) are included in the array.
// HINT: Think in terms of total hits and total at-bats.
function battingAvg(games){
    let totalHits = 0;
    let totalAtBats = 0;

    for(let game of games){
        totalHits += game[0];
        totalAtBats += game[1]
    }

    let avg = totalHits / totalAtBats

    let roundedAvg = avg.toFixed(3);
    return roundedAvg[0] == "0" ? roundedAvg.slice(1) : roundedAvg
}

function battingAvg(games){
    let game = games.reduce((acc,val)=>{
        acc[0] += val[0];
        acc[1] += val[1];
        return acc
    },[0,0])

    let [totalHits,totalAtBats] = game
    let avg = totalHits / totalAtBats

    return avg.toFixed(3).slice(1)
}


function battingAvg(games){
    let totalHits = 0;
    let totalAtBats = 0;

    games.forEach(game => {
        totalHits += game[0];
        totalAtBats += game[1]
    });

    let avg = totalHits / totalAtBats

    return avg.toFixed(3).slice(1)
}

function battingAvg(games){
    let totalHits = 0;
    let totalAtBats = 0;

    for(let [hits,atBat] of games){
        totalHits += hits;
        totalAtBats += atBat
    }

    let avg = totalHits / totalAtBats;

    return avg.toFixed(3).slice(1)

}

function battingAvg(games){
    let totalHits = games.map(item => item[0]).reduce((acc,val)=> acc + val,0);
    let totalAtBats = games.map(item => item[1]).reduce((acc,val)=> acc + val,0);

    let avg = totalHits / totalAtBats

    return avg.toFixed(3).slice(1)

}