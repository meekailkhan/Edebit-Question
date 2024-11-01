// 1.Question)=> Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

// Examples
// console.log(trace([
//   [1, 4],
//   [4, 1]
// ])) //➞ 2

// // 1 + 1 = 2

// console.log(trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ])) //➞ 15

// // 1 + 5 + 9 = 15

// console.log(trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4]
// ])) //➞ 10

// // 1 + 2 + 3 + 4 = 10
// Notes
// As in the examples, the size of the matrices will vary (but they will always be square).
function trace(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length ; i++){
        res += arr[i][i]
    }
    return res
}

function trace(arr){
    let res = 0;
    arr.map((item,index) => res += item[index]);
    return res
}

function trace(arr){
    let res = arr.reduce((acc,val,i)=> acc + val[i],0);
    return res
}
function trace(arr){
    let res = 0;
    for(let i in arr){
        res += arr[i][i]
    }
    return res
}
function trace(arr){
    let res = 0;
    let i = 0 ;
    while(i < arr.length){
        res += arr[i][i];
        i++
    }
    return res
}
function trace(arr){
    let res = 0;
    let i = 0;
    for(let val of arr){
        res += val[i];
        i++
    }
    return res
}

function trace(arr,i=0){
    if(i > arr.length-1) return 0;
    let res = 0;
    res += arr[i][i];
    return res + trace(arr,i+1);
}

function trace(arr){
    let flatArr = arr.flat();
    let res = 0;
    for(let i = 0 ; i < flatArr.length ; i+= arr[0].length+1){
        res += flatArr[i]
    }
    return res
}
// ---------------------------------------------------------------------------------------------------
// 2.Quetion)=> Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

// Examples
console.log(progressDays([3, 4, 1, 2]))  //➞ 2
// // There are two progress days, (3->4) and (1->2)

console.log(progressDays([10, 11, 12, 9, 10]))  //➞ 3

console.log(progressDays([6, 5, 4, 3, 2, 9]))  //➞ 1

console.log(progressDays([9, 9]) )  //➞ 0
// Notes
// Running the same number of miles as last week does not count as a progress day.
function progressDays(arr){
    let res = 0;
    for(let i = 0 ; i < arr.length-1 ; i++){
        if(arr[i] < arr[i+1]){
            res++
        }
    }
    return res
}

function progressDays(arr){
    arr.push(arr[arr.length-1]);
    let res = 0;
    arr.map((item,index,arr)=> {
        if(item < arr[index+1]){
            res++
        }
    })
    return res
}

function progressDays(arr){
    arr.push(arr[arr.length-1]);
    let res = arr.reduce((acc,val,i,array)=>{
        if(val < array[i+1]){
            acc++
        }
        return acc
    },0)
    return res
}
function progressDays(arr){
    arr.push(arr[arr.length-1]);
    let res = 0;
    for(let i in arr){
        if(arr[i] < arr[i+1]){
            res++
        }
    }
    return res
}