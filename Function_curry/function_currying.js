function add(a){
    return function(b){
        return a + b;
    }
}

console.log(add(3)(6));

function multiply(a){
    return function(b){
        return function(c){
            return a * b * c;
        }
    }
}

console.log(multiply(2)(3)(3));

// gerneral utility function to convert any function into utility function

const curryUtility = function (fn) {
    return function curried(...args) { // recurssive inner function
        if (args.length >= fn.length) { // If we’ve received enough arguments, call the original function
            return fn(...args);
        }else { // If not enough arguments, return a new function that collects more arguments
            return function (...nextargs) {
                return curried(...args, ...nextargs);
            };
        };
    };
}

// Example
function mul(a, b, c) {
    return a * b * c;
  }
  
  const curriedMultiply = curryUtility(mul);
  
  console.log(curriedMultiply(2)(3)(4));    // 24
  console.log(curriedMultiply(2, 3)(4));    // 24
  console.log(curriedMultiply(2)(3, 4));    // 24