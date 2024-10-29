// 1.Question)=> Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// Examples
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) //➞ 63

console.log(totalVolume([2, 2, 2], [2, 1, 1])) //➞ 10

console.log(totalVolume([1, 1, 1])) //➞ 1
// Notes
// You will be given at least one box.
// Each box will always have three dimensions included.
function totalVolume(...boxes){
    let res = 0;
    for(let i = 0 ; i < boxes.length ; i++){
        let acc = 1;
        for(let j = 0 ; j < boxes[i].length ; j++)[
            acc *= boxes[i][j]
        ]
        res += acc
    }
    return res
}
function totalVolume(...boxes){
    let res = boxes.reduce((acc,val) =>{
        acc += val.reduce((acc,val)=>{
            acc *= val
            return acc
        },1)
        return acc
    },0)
    return res
}

function totalVolume(...boxes){
    let res = 0;
    boxes.map((item)=>{
        res += item.reduce((acc,val)=>{
            acc *= val;
            return acc
        },1)
    })
    return res
}

function totalVolume(...boxes){
    let res = 0;
    for(let box of boxes){
        res += box.reduce((acc,val)=>{
            acc *= val
            return acc
        },1)
    }
    return res
}

function totalVolume(...boxes){
    let res = 0 ;
    for(let box of boxes){
        let acc = 1
        for(let item of box){
            acc *= item
        }
        res += acc
    }
    return res
}

function totalVolume(...boxes){
    let res = 0;
    boxes.forEach((box)=>{
        let acc = 1;
        box.forEach(item => acc *= item);
        res += acc
    })
    return res
}

function totalVolume(...boxes){
    let res = boxes.map((box) => box.reduce((acc,val)=> acc *= val,1)).reduce((acc,val)=> acc += val ,0)
    return res
}

function totalVolume(...boxes){
    if(boxes.length === 0) return 0;
    let [firsBox,...rest] = boxes;
    let boxVolum = firsBox.reduce((acc,val)=> acc *= val,1);
    return boxVolum + totalVolume(...rest)
}

function totalVolume(...boxes){
    let res = 0;
    let i = 0;
    while(i < boxes.length){
        let acc = 1;
        let j = 0;
        while(j < boxes[i].length){
            acc *= boxes[i][j]
            j++
        }
        res += acc
        i++
    }
    return res
}