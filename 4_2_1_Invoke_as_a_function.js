// In function this refer to the context of where is function calling from

// ------------ START: Calling from upper level (window or nodejs)

function ninja() {
    return this;
}

function samurai() {
    "use strict";
    return this;
}

const weapon = () => {
    return this;
}

// console.log(ninja());  // window or global nodejs Object
// console.log(samurai()); // undefined
// console.log(weapon());  // {}  // in nodejs
// this refers to depends on where the arrow function is defined.


// ------------ ENDs: Calling from upper level (window or nodejs)

// ------------- START: Defining function as the object property

const funcObject = {
    ninja: function () {
        return this;
    },
    samurai: function () {
        "use strict";
        return this;
    },
    weapon: () => {
        return this;
    }
}

    // console.log(funcObject.ninja());  // { ninja: [Function: ninja], samurai: [Function: ninja], weapon: [Function: ninja] }
    // console.log(funcObject.samurai()); // { ninja: [Function: ninja], samurai: [Function: ninja], weapon: [Function: ninja] }
    // console.log(funcObject.weapon());  // {}  // in nodejs
    // Arrow functions do not get this from the object they’re inside — they inherit this from the lexical scope where they're defined.

    // ------------- END: Defining function as the object property

    // ------------- START: Wrapping the functions in IIFE
    // NOTE: this IIFE will not work unless comment all the code and then run IIFE

    (function () {
        function ninja() {
            return this;
        }

        function samurai() {
            "use strict";
            return this;
        }

        const weapon = () => {
            return this;
        }

        console.log(ninja());  // window or global nodejs Object  => {} (same as IIFE this)
        console.log(samurai()); // undefined
        console.log(weapon());  //  window or global nodejs Object  => {} (inherits from IIFE)
    })("Hattori"); // IIFE


// ------- Using Strict Mode ---

"use strict";  // NOTE: Move the this "use strict"; line in first line of the file, then only it will work !!! 😅
(function () {
    function ninja() {
        return this;
    }

    function samurai() {
        "use strict";
        return this;
    }

    const weapon = () => {
        return this;
    }

    console.log(ninja());  // undefined
    console.log(samurai()); // undefined
    console.log(weapon());  //  undefined
    // Since in the strict mode function does'nt refer to the window and global object 
})("Hattori"); // IIFE

// ------------- END: Wrapping the functions in IIFE

// ------------- START: Wrap IIFE within IIFE

(function () {
    (function () {
        function ninja() {
            return this;
        }

        function samurai() {
            "use strict";
            return this;
        }

        const weapon = () => {
            return this;
        }

        console.log(ninja());  // window or global nodejs Object  => {} (same as IIFE this)
        console.log(samurai()); // undefined
        console.log(weapon());  //  window or global nodejs Object  => {} (inherits from IIFE)
    })("Hattori"); // IIFE
})(); // IIFE

// Result : It will be same as one IIFE, because the IIFE is a function not a method

// ------------- END: Wrap IIFE within IIFE

// ------------- START: Normal functions inside the object methods

const grandObject = {
    mainFunction: function () {
        function ninja() {
            return this;
        }

        function samurai() {
            "use strict";
            return this;
        }

        const weapon = () => {
            return this;
        }

        console.log(ninja());  // window or global nodejs Object
        console.log(samurai()); // undefined
        console.log(weapon());  //  { mainFunction: [Function: mainFunction] }
    }
}

grandObject.mainFunction();

// ------------- END: Normal functions inside the object methods
