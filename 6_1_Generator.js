
// Generator is to handle the asynchronous tasks
// when we add a "*" keyword in the function declaration, it assumed as the generator functions
// and in that function we can use the "yield" keyword
// from outside of that function we can call the function iterator and use the next method

// e.g

function* getWeapon() {
    yield "Katana";
    yield "Kawashiok";
}

// Iterator
const weaponIterator = getWeapon();

const firstYield = weaponIterator.next();
console.log(firstYield) // {value: "Katana", done: false} => here the value is the "Katana" and done is a boolean flag which tells us the function is completed or not

const secondYield = weaponIterator.next();
console.log(secondYield) // {value: "Kawashiok", done: false} => here the function is yet to complete it is in paused state

const thirdYield = weaponIterator.next();
console.log(thirdYield) // {value: undefined, done: true} => here the function is completed

// Output 
// { value: 'Katana', done: false }
// { value: 'Kawashiok', done: false }
// { value: undefined, done: true }


// the last iterator.next() is must to call, if it didn't get call then the function is always in the paused mode
// And by calling the iterator.next() method manually there is a maximum chance to forget to call the last iterator.next method
// So by using the loop we can avoid it.


/// ============= START: Same above function iteration with loop ======

function* getWeapon1() {
    yield "Katana";
    yield "Kawashiok";
    yield "Wakizashi";
    yield "Kusarigama";
}

const weaponIterator1 = getWeapon1();

let item = null;
while (!(item = weaponIterator1.next()).done) {
    console.log(item);
}

/// ============= END : Same above function iteration with loop ======



// And here is the more easy way to iterate over it using "for of" loop
// "for of" loop works with iterator like Array, string, Map
// for of internally manage call the iterator.next() method and set the value in item variable
// and it automatically get break when the iterator.next() return the done as true

/// ============= START: Same above function iteration with for of loop ======

function* getWeapon2() {
    yield "Katana";
    yield "Kawashiok";
    yield "Wakizashi";
    yield "Kusarigama";
}

const weaponIterator2 = getWeapon2();

for (const item of weaponIterator2) {
    console.log(item); // this will be a value
}
// Output: 
// Katana
// Kawashiok
// Wakizashi
// Kusarigama

/// ============= END: Same above function iteration with for of loop ======


/// ==============  START: Calling generator function from another generator function ===========

// We can call generator function from another generator function by using yield* keyword
// e.g

function* getWarriors() {
    yield "Sun Tzu";
    yield* getNinja();
    yield "Genghis Khan";
    yield "Yoltas Waku";
};

function* getNinja() {
    yield "Hattori";
    yield "Yoshi";
};

for (const element of getWarriors()) {
    console.log(element);
}
//output:
// Sun Tzu
// Hattori
// Yoshi
// Genghis Khan
// Yoltas Waku

/// ==============  END: Calling generator function from another generator function ===========


/// ============== START: Generate unique id's using the generator ===============

function* getUniqueId() {
    let counter = 0;
    while (true) {
        yield ++counter;
    }
}

const getUniqueIdIterator = getUniqueId();

const firstId = getUniqueIdIterator.next().value;
console.log({ firstId }); // {firstId: 1}
const secondId = getUniqueIdIterator.next().value;
console.log({ secondId }); // {secondId: 2}
const thirdId = getUniqueIdIterator.next().value;
console.log({ thirdId }); // {thirdId: 3}
// ... and so on

/// ============== END: Generate unique id's using the generator ===============



/// ============== START: Sending Parameter in generator functions =============

function* NinjaGenerator(action) {
    // the yield will paused the execution by returning some value
    // and when the iterator.next() method call then the further execution will start
    // that means if the iterator.next("Test") send any parameter then it will get assign to the variable
    // and here the variable is imposter
    const imposter = yield ("Hattori " + action);
    console.log(imposter === "Hanzo", " The generator has been infiltrated");

    yield ("Yoshi (" + imposter + ") " + action);
}

const ninjaIterator = NinjaGenerator("skulk");

// Here in the next method we are not passing any parameter
// since the parameter will not assign to any variable and for initial parameter we passed the parameter in function call.
// and after calling .next() method the execution will
const result1 = ninjaIterator.next(); // {value: "Hattori skulk"}

console.log(result1.value === "Hattori skulk", " Hattori is skulking.");

const result2 = ninjaIterator.next("Hanzo"); // {value: "Yoshi (Hanzo) skulk"}
console.log(result2.value === "Yoshi (Hanzo) skulk", " We have an imposter");

//output
// true  Hattori is skulking.
// true  The generator has been infiltrated
// true  We have an imposter

/// ============== END: Sending Parameter in generator functions =============


/// ============== Throwing Exception to generators

function* NinjaGenerator1() {
    try {
        yield "Hattori";
        console.log("The expected exception didn't occur");
    } catch (error) {
        console.log(error === "Catch this!", " Aha! we caught an exception.");
    }
}

const ninjaIterator1 = NinjaGenerator1();

const item1 = ninjaIterator1.next(); // { value: "Hattori"}
console.log(item1.value === "Hattori", " We got Hattori.");

ninjaIterator1.throw("Catch this!"); // Throws an exception to the generator

// output
// true  We got Hattori.
// true  Aha! we caught an exception.