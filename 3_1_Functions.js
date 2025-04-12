
// There are function types
// 1. Function Declaration
// 2. Function expression
// 3. Arrow function

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
