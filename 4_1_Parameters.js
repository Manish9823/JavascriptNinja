
// In Javascript there always two implicit parameter with function call beside of normal parameter
// 1. arguments
// 2. this
// E.g. =>

function functionTest(name) {
    // Explicit Parameter  => name
    // Implicit Parameter => arguments and this
};


// ========== START : Arguments =========================

// With Parameter a,b,c
function sum1(a, b, c) {
    return a + b + c;
}

console.log(sum1(4, 6, 2));  // Passing arguments

// With Rest Parameters
function sum2(...restParameters) {
    // Here the restParameter is pure array means we can call the sort, find, filter, etc methods
    let sum = 0;
    for (let index = 0; index < restParameters.length; index++) {
        const element = restParameters[index];
        sum += element;
    }
    return sum;
}

console.log(sum2(4, 6, 2));


// With Arguments
function sum3() {
    console.log({ arguments, type: typeof arguments }) // { arguments: [Arguments] { '0': 4, '1': 6, '2': 2 }, type: 'object' }

    // Here the arguments is not an array means we can not call the sort, find, filter, etc methods, expect length method
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum += element;
    }
    return sum;
}
console.log(sum3(4, 6, 2));


//=================================================================

// ============= START:  Overriding Parameters 

function matchParameter(person) {
    console.log(person === "user" ? "person is user." : "person is not user.");
    arguments[0] = "Ninja";
    console.log(person === "Ninja" ? "person is ninja now." : "person is still user.")
}
matchParameter("user");

// Using strict mode
"use strict";  // NOTE: Move the this "use strict"; line in first line of the file, then only it will work !!! 😅 
function matchParameterWithUseStrict(person) {
    console.log(person === "user" ? "person is user." : "person is not user.");
    arguments[0] = "Ninja";
    console.log(person === "Ninja" ? "person is ninja now." : "person is still user.")
}
matchParameterWithUseStrict("user");

// ============== END: Overriding Parameters 



// ============== START: Arguments in Arrow functions

function normal(name) {
    console.log({ name, argumentName: arguments[0] },);
}

const arrow = (name) => {
    console.log({ name, argumentName: arguments[0] },);
}

normal("Ninja");  // { name: 'Ninja', argumentName: 'Ninja' }
arrow("Ninja");  // { name: 'Ninja', argumentName: {} }

// Summary: In arrow function the arguments belongs to parents (function invoke point) arguments

(function () {
    function normal(name) {
        console.log({ name, argumentName: arguments[0] },);
    }

    const arrow = (name) => {
        console.log({ name, argumentName: arguments[0] },);
    }

    normal("Ninja");  // { name: 'Ninja', argumentName: 'Ninja' }
    arrow("Ninja");  // { name: 'Ninja', argumentName: 'Hattori' }
})("Hattori");

// Then what if the parent is also a arrow function 🤔
// The answer is same 😅😅😅 

(function () {
    const test = () => {
        function normal(name) {
            console.log({ name, argumentName: arguments[0] },);
        }

        const arrow = (name) => {
            console.log({ name, argumentName: arguments[0] },);
        }

        normal("Ninja");  // { name: 'Ninja', argumentName: 'Ninja' }
        arrow("Ninja");  // { name: 'Ninja', argumentName: 'Hattori' }
    }
    test("weapon");
})("Hattori");

// ============== END:  Arguments in Arrow functions