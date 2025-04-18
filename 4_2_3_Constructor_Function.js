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