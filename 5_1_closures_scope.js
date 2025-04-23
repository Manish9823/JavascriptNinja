
// Closure allows a function to access and manipulate variables that are external to that function.

var outerValue = "ninja";

function outerFunction() {
    console.log(outerValue === "ninja", ' Outer value is available.') // true
};

outerFunction();


// ----------------  Another closure example -------------

var outerValue1 = "samurai";
var later;

function outerFunction1() {
    var innerValue = "ninja";

    function innerFunction() {
        console.log(outerValue === 'samurai', " I can see the samurai.");  // true
        console.log(innerValue === 'ninja', " I can see the ninja.");  // true
    }

    later = innerFunction;
}

console.log(typeof later === "function", " This is function  or not?") // false

outerFunction1()

console.log(typeof later === "function", " This is function  or not?") // true

later();
