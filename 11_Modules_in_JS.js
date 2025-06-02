
// Module is the reusability of the code, wrapping code into a file and use it into the another file
// Before ES6 there was a trick to use the code as module by wrapping the code into IIFE.
// Using AMD and CommonJS
// 1. AMD: Asynchronous Module Definition => Created explicitly for the browser compatibility, uses "define" keyword with the some parameter, 
//  define("moduleName",["anotherDependentModule"],()=>{ let test ='test'; return {test}; }) 
//  Here 1st parameter define the moduleName, 2nd is dependent modules array (synchronous or asynchronous) which will load first, but the thread will not block, 3rd is the module function
//  Mostly for browser
// 2. CommonJS => Synchronous, Single file implementation, export using the module.export = {test}; and import using require keyword.
// This is mostly used in server side scripts like nodejs
// Doesn't support top-level-await

// In ES6 Module
// Brought asynchronous from AMD, and all others from CommonJS (Single file and export)
// two main keyword => "export" and "import"
// export const test =()=>{};  // test.js
// import test from "test";
// More things like "* as test" (import all in one object), import default, etc.
// Support top-level-await

// E.g

// 1. CommonJS
// const { printParameter } = require("./11_test_module.js");

// printParameter(1);
// printParameter(2);
// printParameter(3);
// printParameter(4);


// 2. ES6 Modules

// a. One by one imports
import { testClass, testFunction, testVarRandomNumber } from "./11_test_module.js"
console.log(testVarRandomNumber);
testFunction('test parameter');
new testClass();

console.log("-----------------------------------")

// b. Import all 
import * as Test from "./11_test_module.js";
console.log(Test.testVarRandomNumber);
Test.testFunction('Import all');
new Test.testClass();

console.log("-----------------------------------")


// 3. ES6 Module (export at once and with aliases)
import { PrintRandomNumberClass, randomNumber as MagicNumber, printFunction } from "./11_test_module.js"
console.log({ MagicNumber }); // Print randomNumber aliases (import aliases) 
try { console.log({ randomNumber }) } catch (error) { console.log(error.message); } // "randomNumber is not defined"
printFunction('This is export at once example');
new PrintRandomNumberClass(); // this is aliases example (export aliases)

// 4. Import asynchronous module
console.log("Before Async feature of module: ", Date.now())
const test = await import("./11_test_module.js");
console.log("After Async feature of module: ", Date.now())