// There are scope environment (lexical environment)
// 1. global environment
// 2. function environment 
// 3. block environment

// variable declare with var is scope within the closet function environment or global environment
// it ignore the block environment (loop block, if block, switch block, try catch block etc.)

var globalNinja = "Yoshi";

function reportActivity() {
    var functionActivity = "jumping";

    // ------------- Block Scope ---------------------
    for (var i = 1; i < 3; i++) {
        var forMessage = globalNinja + " " + functionActivity;
        console.log(forMessage === "Yoshi jumping", " Yoshi is jumping within the for block.");
        console.log("Current lop counter: ", i)
    }

    console.log(i === 3 && forMessage === "Yoshi jumping", "Loop variables accessible outside of the loop.", i, " ", forMessage);

    if (i === 3) {
        var j = i;
    }

    switch (j) {
        default: var k = i + 2;
    }

    try {
        var l = k * 3;
    } catch (error) {
        console.error(error);
    }
    console.log({ j, k, l });

}

reportActivity();

// -------------- eg. of functional block scope
console.log(typeof functionActivity === "undefined" && typeof i === "undefined" && typeof forMessage === "undefined", "We cannot see function variables outside of a function.");