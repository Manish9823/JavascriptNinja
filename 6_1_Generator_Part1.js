
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
