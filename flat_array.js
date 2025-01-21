// flat an array
// a = [1,[2,3,[4,5],[6,7,[8]],9]]
//output should be [1,2,3,4,5,6,7,8,9]

let res = [];
const flatenArray = (arr) => {
    arr.map((item) => {
        if(Array.isArray(item)){
            flatenArray(item)
        }else {
            res.push(item);
        }
    });
}

//flatenArray([1,[2,3]]);
flatenArray([1,[2,3,[4,5],[6,7,[8]],9]]);
console.log(res);