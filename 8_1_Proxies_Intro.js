
// Proxies is new type of object
// Through the Proxy constructor, we create a proxy object that controls access to the target object by 
// activating certain traps, whenever an operation is performed directly on a proxy
// Traps=> apply, get, set, enumerate, getPrototypeOf and setPrototypeOf
// 1. apply : trap will be activated when calling a function, and the construct trap when using the new operator.
// 2. get and set: trap will be activated when reading/writing to a property
// 3. enumerate: trap will be activated for for-in statements
// 4. getPrototypeOf and setPrototypeOf : will be activated for getting and setting the prototype value. 


const emperor = { name: "Komai" }
const representative = new Proxy(emperor, {
    get: (target, key) => {
        console.log("Getter call");
        return target[key] ? target[key] : "Key not Found"; // Here instead of the default string we can return undefined or null as well
    },
    set: (target, key, value) => {
        console.log("Setter call");
        target[key] = value;
    }
});

console.log(emperor.name, " name using normal object"); // Komai
console.log(representative.name, " name using proxy object"); // Getter call \n Komai

emperor.name = "Yoshi";
console.log(emperor.name, " name using normal object"); // Yoshi
console.log(representative.name, " name using proxy object"); // Getter call \n Yoshi

representative.name = "Hattori"; // Prints: "Setter call"
console.log(representative.name, " name using proxy object"); //  Getter call \n Hattori
console.log(emperor.name, " name using normal object"); // Hattori

console.log(emperor.nickname === undefined, " Emperor nickname is not exists"); // true
console.log(representative.nickname === "Key not Found", " Representative nickname is not exists"); // true  // Here we explicitly provided the return value in getter method

representative.nickname = "Tenno";  // Prints: "Setter Call"
console.log(emperor.nickname === "Tenno", " Emperor nickname is tenno"); // true
console.log(representative.nickname === "Tenno", " Representative nickname is tenno"); // true  // Here we explicitly provided the return value in getter method


//===============================================================================

// Proxy : Proxies are more powerful. The allow us to  
// 1. Easily add profiling and logging
// 2. Performance Measurements to our code
// 3. Auto-populate object properties in order to avoid pesky null exceptions
// 4. To Wrap host objects such as the DOM in order to reduce cross-browser incompatibilities.