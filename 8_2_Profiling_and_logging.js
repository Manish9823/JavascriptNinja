
function makeLoggable(target) {
    return new Proxy(target, {
        get: (target, property) => {
            console.log("Reading " + property);
            return target[property];
        },
        set: (target, property, value) => {
            console.log("Writing value " + value + " to " + property);
        }
    });
}

let ninja = { name: "Yoshi" };
ninja = makeLoggable(ninja);


console.log(ninja.name === "Yoshi", " Our ninja Yoshi."); // Reading name \n true Our ninja Yoshi

ninja.weapon = "sword"; // Print: "Writing value sword to weapon" 