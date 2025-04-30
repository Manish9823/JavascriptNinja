// Unlike var, which define the variable in the closest function or global lexical environment, the let and const keywords are more straight forward.


const GLOBAL_NINJA = "Yoshi";

function reportActivity() {
    const functionActivity = "jumping";

    // ------------- Block Scope ---------------------
    for (let i = 1; i < 3; i++) {
        let forMessage = GLOBAL_NINJA + " " + functionActivity;
        console.log(forMessage === "Yoshi jumping", " Yoshi is jumping within the for block.");
        console.log("Current lop counter: ", i)
    }

    console.log(typeof i === 'undefined' && typeof forMessage === "undefined", " Loop variables are not accessible outside of the loop.");
}

reportActivity();

// -------------- eg. of functional block scope
console.log(typeof functionActivity === "undefined" && typeof i === "undefined" && typeof forMessage === "undefined", "We cannot see function variables outside of a function.");