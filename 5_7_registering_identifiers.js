// Registering Identifiers
// 1. Whenever the new lexical environment is encounter the code isn't executed first
// Instead of the javascript engine visits and register all declared variables and function within the current lexical env.
// So first it register the implicit arguments, then parameters, variable (depends on let, var, const), then function 

// Accessing a function before its declaration

console.log(typeof fun === "function", " fun is a function even though its definition isn't reached yet"); // true

console.log(typeof myFunExp === "function", " Can we access the function expression?"); // false

console.log(typeof myArrow === "function", " Can we access the arrow function?"); //false


function fun() { }   // function declaration


// Here we are intentionally used the "var" so the variable is assign as undefined,
// if we use the const or let it will be a temporary dead zone state and we cannot use it before the engine reach here.
var myFunExp = function () { }  // function expression

var myArrow = (x) => { console.log(x) } //  arrow function



// ========================  Overriding Functions  ===

console.log(typeof fun1 === "function", " We can access the function?"); // true

var fun1 = 3; // overriding the fun1 with number

console.log(typeof fun1 === "number", " Now we access the number?"); // true

function fun1() { }  // Function declaration

console.log(typeof fun1 === "number", " Still a number???"); // true  // fun1 still refers to the number;