// 1. Which mechanism enables private module variables in the module pattern?
// a. Prototype
// b. Closures
// c. Promises

// ans: b. Closures


// 2. In the following code that uses ES6 modules, which identifiers can be accessed if the module is imported?
// const spy = "Yagyu";
// function command() { return general + " commands you to wage war!" };
// export const general = " Minamoto";

// a. spy
// b. command
// c. general

// ans: c. general


// 3. In the following code that uses ES6 modules, which identifiers can be accessed if the module is imported?
// const ninja = "Yagyu";
// function command() { return general + " commands you to wage war!" };
// const general = " Minamoto";
// export { ninja as spy}

// a. spy
// b. command
// c. general
// d. ninja

// ans: a. spy


// 4. Which of the following imports are allowed?
// File: personnel.js
// const ninja = "Yagyu";
// function command() { return general + " commands you to wage war!" };
// const general = " Minamoto";
// export { ninja as spy}

// a. import { ninja, spy, general } from "./personnel.js"
// b. import * as Personnel from "./personnel.js";
// c. import {spy} from "./personnel.js";

// ans: c. import {spy} from "./personnel.js";
// review: b will also work it need use 'Personnel.spy' way 

// 5. If we have the following module code, which statement will import the Ninja class?
// File: Ninja.js

// export default class Ninja {
//     skulk() { return "skulking"; };
// }

// a. import Ninja from "./Ninja.js";
// b. import * as Ninja from "./Ninja.js"  
// c. import * from "./Ninja.js"

// ans: a. import Ninja from "./Ninja.js"; 
// review => b will also work but it need to use Ninja.default() to invoke a class
