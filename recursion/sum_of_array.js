// sum of an array 
// input = [1,2,3,4,5] output = 15


let sum = (arr) => {
    let res = 0;
    arr.map((item) => {
        res = res + item
    });
    return res;
}

console.log(sum([1,2,3,4]));

// - -- recurssion -- - //

const sumRec = (arr) => {
    if (arr.length === 0) {
        return 0;
    }else {
        return arr[0] + sumRec(arr.slice(1));
    }
}

console.log(sumRec([1,2,3,4,5,6]));