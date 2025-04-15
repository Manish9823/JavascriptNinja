
// There are function types
// 1. Function Declaration
// 2. Function expression
// 3. Arrow function
// 4. Function Constructor

const numbers = [2, 0, 8, 5, 9, 1, 3, 7, 4,];

// Function Declaration
const declarationResult = numbers.sort(function sortAsc(a, b) { return b - a; });
console.log({ declarationResult });


// Function Expression
(function () { })();
(function () { }());
// Function Expression with arrow
(() => "Yoshi")();

const samurai = (() => "Tomoe")(); // Tomoe
const ninja = (() => { "Yoshi" })();  // undefined
const advancedNinja = ((type) => `${type} Ninja`)("Advanced");  // Advanced Ninja
console.log({ samurai, ninja, advancedNinja })


// Arrow Function
const arrowFunctionResult = numbers.sort((a, b) => b - a);
console.log({ arrowFunctionResult })


// Function Constructor
const sumFunction = new Function('a', 'b', 'return a + b');
console.log('sumFunction:-', sumFunction(3, 4));

const operation = new Function('a', 'b', 'c', 'return a/b*c');
console.log('operation:-', operation(10, 2, 10));

// Summary

// Fast: 
// Arrow functions and function declarations/expressions are generally the fastest 
// and most optimized by modern JavaScript engines. They have nearly identical performance for most use cases.

// Slow:
//Function constructors (new Function()) are significantly slower because:
// They're dynamically compiled at runtime
// They can't be optimized by the JavaScript engine as effectively
// They don't have access to the lexical scope