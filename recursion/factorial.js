// factorial of a numbet 
// ex - 5! = 5 * 4 * 3 * 2 * 1 = 120

let fact = 1;
const factorial = (x) => {
    for (let i=x; i>=1; i--){
        fact = fact * i;
    }
}

factorial(5);
console.log(fact);

// - -- Recurssion -- //

let factorialRec = (n) => {
    if (n===0 || n=== 1){
        return 1
    }else {
        return n * factorialRec(n-1);
    }
}

console.log(factorialRec(5));
/* Dry Run

n = 5 --> 5 * f(4)
n = 4 --> 4 * f(3)
n = 3 --> 3 * f(2)
n = 2 --> 2 * f(1)

n = 1 --> return 1

return 2 * 1 = 2
return 3 * 2 = 6
return 4 * 6 = 24
return 5 * 24 = 120 
*/