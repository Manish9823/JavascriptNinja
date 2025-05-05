// Exercise Problems

// 1.

function* EvenGenerator() {
    let num = 2;
    while (true) {
        yield num;
        num = num + 2;
    }
}
let generator = EvenGenerator();

let a1 = generator.next().value;
let a2 = generator.next().value;
let a3 = EvenGenerator().next().value;
let a4 = generator.next().value;

console.log({ a1, a2, a3, a4 }); // { a1: 2, a2: 4, a3: 2, a4: 6 }


// 2.

// With for of loop
function* NinjaGenerator() {
    yield "Yoshi";
    return "Hattori";
    yield "Hanzo";
}

var ninjas = [];
for (let ninja of NinjaGenerator()) {
    ninjas.push(ninja);
}
console.log({ ninjas }); // { ninjas: [ 'Yoshi' ] }

// with while loop

var ninjas1 = [];
const ninjaIterator = NinjaGenerator();
let ninja1 = null;
while (!(ninja1 = ninjaIterator.next()).done) {
    ninjas1.push(ninja1.value);
}
console.log({ ninjas1 }); // { ninjas1: [ 'Yoshi' ] }


// 3

function* Gen(val) {
    val = yield val * 2;
    yield val;
}
let generator1 = Gen(2);
let aGen1 = generator1.next(3).value;  // the first next() parameter get's ignored
let aGen2 = generator1.next(4).value;  // when we call next(4) method the val will assign as the value 4
console.log({ aGen1, aGen2 }); // { aGen1: 4, aGen2: 4 }


// 4.

const promise = new Promise((resolve, reject) => {
    reject("Hattori");
});
promise.then((val) => { console.log("Success: ", val) }).catch((error) => { console.log("Error: ", error) });
// output: Error:  Hattori


// 5.

const promise1 = new Promise((resolve, reject) => {
    resolve("Hattori");
    setTimeout(() => reject("Yoshi"), 500);
});

promise1.then((val) => { console.log("Promise1 Success: ", val) }).catch((error) => { console.log("Promise1 Error: ", error) });
// output: Promise1 Success:  Hattori