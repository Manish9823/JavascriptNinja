

function whatIsMyContext() {
    return this;
}

console.log(whatIsMyContext()); // window or global context

const getMyThis = whatIsMyContext;

console.log(getMyThis()); // window or global context

const ninja1 = {
    name: "Ninja1",
    getMyThis: whatIsMyContext
}

console.log(ninja1.getMyThis());  // { name: 'Ninja1', getMyThis: [Function: whatIsMyContext] }
console.log(ninja1 === ninja1.getMyThis()); // true

const ninja2 = {
    name: "Ninja2",
    getMyThis: whatIsMyContext
}

console.log(ninja2.getMyThis());  // { name: 'Ninja2', getMyThis: [Function: whatIsMyContext] }
console.log(ninja2 === ninja2.getMyThis()); // true

// Note here you can see the whatIsMyContext function is not bound to the ninja1 or ninja2 object, but when you call it as a method of the object, it refers to the object itself. otherwise it refers to global object