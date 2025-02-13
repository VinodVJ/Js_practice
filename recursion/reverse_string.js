// reverse a string 
// input - vinod output - doniv

const reverseString = (str) => {
    if (str.length === 1) {
        return str;
    } else {
        return str[str.length-1] + reverseString(str.slice(0, -1));
    }
}

console.log(reverseString('vinod'));