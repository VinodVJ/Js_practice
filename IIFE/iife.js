/*

Problem Statement
Create a counter using JavaScript that:

Maintains a private count variable.

Exposes the following methods:

increment(): Increases the count by 1.

decrement(): Decreases the count by 1.

reset(): Resets the count to 0.

get(): Returns the current count.

The count variable must not be accessible directly from outside.

Use IIFE to encapsulate and protect the count variable.

*/

const counter = (function () {
    var count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        get: function() {
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.get());
console.log(counter.reset());
console.log(counter.get());
console.log(counter.increment());
console.log(counter.get());
