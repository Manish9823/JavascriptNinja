// 1. CommonJS
// let counter = 0;
// const printParameter = (parameter) => {
//     console.log({ parameter, counter });
//     counter++;
// }
// module.exports = { printParameter };


// 2. ES6
export const testVarRandomNumber = Math.floor(Math.random() * 100);
export const testFunction = (parameter) => { console.log({ parameter, testVarRandomNumber }); }
export class testClass { constructor() { console.log("Class Constructor Called with testVarRandomNumber = ", testVarRandomNumber) } }


// 3. ES6 with at one export and aliases
const randomNumber = Math.floor(Math.random() * 1000);
const printFunction = (parameter) => { console.log({ parameter, randomNumber }) }
class PrintClass { constructor() { console.log("Print Class called with random number => ", randomNumber) } }

export { randomNumber, printFunction, PrintClass as PrintRandomNumberClass };