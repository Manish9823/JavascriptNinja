// the bind method is also set the context for the function but the key difference is 
// 1. Both apply and call immediately invoke the function
// 2. bind does not immediately execute the function
//    Instead, it returns a new function with the specified this context permanently attached
//    The returned function can be called later
//    Arguments can be partially applied at bind time

function greet(greeting, punctuation) {
    return greeting + ', ' + this.name + punctuation;
}

const person = { name: 'John' };

// call - immediately executes
console.log(greet.call(person, 'Hello', '!')); // "Hello, John!"

// apply - immediately executes
console.log(greet.apply(person, ['Hello', '!'])); // "Hello, John!"

// bind - returns a new function
const greetJohn = greet.bind(person);
console.log(greetJohn('Hello', '!')); // "Hello, John!"

// bind with partial application
const sayHiToJohn = greet.bind(person, 'Hi');
console.log(sayHiToJohn('.')); // "Hi, John."
console.log(sayHiToJohn('@')); // "Hi, John@"


const sayHiToJohn1 = greet.bind(person, 'Hi', '!!!');
console.log(sayHiToJohn1()); // Hi, John!!!

const sayHiToJohn2 = greet.bind(person);
console.log(sayHiToJohn2('Hi', '!!!!')); // Hi, John!!!!

const sayHiToJohn3 = greet.bind(person);

// bind always create and return new function
console.log(sayHiToJohn2 === sayHiToJohn3)  //  false



// -------------------------- apply, call, bind with the arrow function 


const greetWithArrow = (greeting, punctuation) => {
    return greeting + ', ' + this.name + punctuation;
}

const personWithArrow = { name: 'John' };

// call - immediately executes
console.log(greetWithArrow.call(personWithArrow, 'Hello', '!')); // "Hello, undefined!"

// apply - immediately executes
console.log(greetWithArrow.apply(personWithArrow, ['Hello', '!'])); // "Hello, undefined!"

// bind - returns a new function
const greetJohnArrow1 = greetWithArrow.bind(personWithArrow);
console.log(greetJohnArrow1('Hello', '!')); // "Hello, undefined!"

// bind with partial application
const sayHiToJohnArrow = greetWithArrow.bind(personWithArrow, 'Hi');
console.log(sayHiToJohnArrow('.')); // "Hi, undefined."
console.log(sayHiToJohnArrow('@')); // "Hi, undefined@"


const sayHiToJohnArrow1 = greetWithArrow.bind(personWithArrow, 'Hi', '!!!');
console.log(sayHiToJohnArrow1()); // Hi, undefined!!!

const sayHiToJohnArrow2 = greetWithArrow.bind(personWithArrow);
console.log(sayHiToJohnArrow2('Hi', '!!!!')); // Hi, undefined!!!!

const sayHiToJohnArrow3 = greetWithArrow.bind(personWithArrow);

// bind always create and return new function
console.log(sayHiToJohnArrow2 === sayHiToJohnArrow3)  //  false


// NOTE: apply and call method change the function context (this) and arguments list only for normal function
// They cannot change the this context of an arrow function.
// The arrow function will ignore the thisArg parameter (the first parameter you pass to apply or call) and continue using whatever this value was in the scope where the arrow function was defined.
// The same principle applies to bind - it returns a new function, but the this value inside the arrow function remains unchanged.