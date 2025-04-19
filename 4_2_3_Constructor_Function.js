// Constructor Function

// if the function is invoke with new keyword, it returns an empty object as a context, where without new keyword it returns the global object or window object

function WhatIsMyContext() {
    return this;
}

// Using new keyword it will return new object every time
const ninja = new WhatIsMyContext();
const ninja1 = new WhatIsMyContext();

// Without new keyword it will return global object or windows object
const ninja2 = WhatIsMyContext();

console.log(ninja === ninja1); // false
console.log(ninja);  // WhatIsMyContext {}
console.log(ninja1); // WhatIsMyContext {}

console.log(ninja2)  // global object or window object


// We cannot invoke arrow function with new keyword
// e.g.
const Test = () => {
    return this;
};
// // If you want to try below code, please uncomment the code. 
// const test1 = new Test(); // It will throw an error as "Test is not a constructor"
// const test2 = Test(); 

// console.log(test1, test2);



// -------------    START: Adding methods in the empty object context ----------

function Ninja() {
    this.skulk = function () {
        return this;
    };
}

const ninja4 = new Ninja();
const ninja5 = new Ninja();

console.log(ninja4.skulk() === ninja4);
console.log(ninja5.skulk() === ninja5)

// -------------    END: Adding methods in the empty object context ----------

// ------------- START : function with return value ----------------

// If function return primitive values then the new keyword will invoke the empty object and normal function will return primitive values, 
// but if the function return non-primitive values then the new keyword invoke and normal invoke value will be same 
// e.g
// 1. First with primitives (String, Number, Boolean, Null, undefined, Symbol, BigInt)
function Ninja1() {
    this.skulk = function () {
        return this;
    }
    return 1; // return 1, true, "abc" , null, undefined, 123n (BigInt)
}

const ninja6 = new Ninja1();
const ninja7 = Ninja1();

console.log(ninja6);  //  Ninja1 { skulk: [Function (anonymous)] }
console.log(ninja7);  // 1, true, "abc" , null, undefined, 123n (BigInt)

// 2. non-primitives (Object , Array , Function ,Date, RegExp, Map, Set, etc.)
function Ninja2() {
    this.skulk = function () {
        return this;
    }
    return {}; // return {}, function(){}, ()=>{} , new Date(), new RegExp(), new String('abc'), new Number(123), etc
}

const ninja8 = new Ninja2();
const ninja9 = Ninja2();

console.log(ninja8);  //  {}, function(){}, ()=>{} , new Date(), new RegExp(), new String('abc'), new Number(123), etc 
console.log(ninja9);  //  {}, function(){}, ()=>{} , new Date(), new RegExp(), new String('abc'), new Number(123), etc

// ------------- END : function with return value ----------------

// ------------- START : Global object in function

const puppet = {
    rules: false
}

function Emperor() {
    this.rules = true;
    return puppet;
}

const emperor = new Emperor();

console.log(emperor === puppet); // true
console.log(emperor.rules === false);  // true

// ------------- END : Global object in function