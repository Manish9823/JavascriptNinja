// There are four ways to invoke the functions
// 1. As a function => skulk(), in which the function is invoked in a straight forward manner
// 2. As a method => ninja.skulk(), in which ties the invocation to an object, enable the object oriented programming
// 3. As a constructor => new Ninja(), in which a new object is brought 
// 4. Via the function's apply and call methods => skulk.call(ninja) or skulk.apply(ninja)

// E.g. 
// 1. Invoke as a function

function skulk() { };  // Function Expression
skulk(); // Invoke as a function without parameter
skulk('Hattori');  // Invoke as a function with parameter

const value = (function (who) { return who; })();  // Invoke as a function without parameter
const value1 = (function (who) { return who; })("Hattori");  // Invoke as a function with parameter


// 2. Invoke as a Method of an object (ninja)
const ninja = {
    skulk: function () { }
}

ninja.skulk();   // without parameter
ninja.skulk('Hattori'); // with parameter


// 3. Invoke as a constructor
function Ninja(name) { };
const ninja1 = new Ninja();   // without parameter
const ninja2 = new Ninja("Hattori"); // with parameter


// 4. Invoke via the apply and call method
skulk.apply(ninja);  // without parameter
skulk.apply(ninja, "Hattori"); // with parameter

skulk.call(ninja); // without parameter
skulk.call(ninja, ["Hattori"]); // with parameter