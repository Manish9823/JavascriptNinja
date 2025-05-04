
// Promises is the placeholder for the value until it gets fulfil and the callback will execute the value.
// state => pending, fulfil, reject

// Let's understand using an example

const test = new Promise((resolve, reject) => {
    console.log("Pending State");
    setTimeout(() => {
        if (Math.random() * 10 > 5) {
            resolve("State changed to Fulfil.");
        } else {
            reject("State changed to Reject.")
        }
    }, 10);
});

console.log({ test }) // <pending>
test.then((message) => { console.log(message) }).catch((message) => { console.log(message) });
setTimeout(() => {
    console.log(test); // <rejected> || returned value
}, 11);



/// ===================  START: Code Execution sequence ===================

console.log("At code start."); // 1

var ninjaDelayedPromise = new Promise((resolve, reject) => {
    console.log("ninjaDelayedPromise executor");  // 2
    setTimeout(() => {
        console.log("Resolving ninjaDelayedPromise"); //7
        resolve("Hattori");
    }, 500);
});

console.log("after creating ninjaDelayedPromise") //3

ninjaDelayedPromise.then(ninja => {
    console.log(ninja === "Hattori", " ninjaDelayedPromise resolve handled with Hattori"); // 8
});

const ninjaImmediatePromise = new Promise((resolve, reject) => {
    console.log("ninjaImmediatePromise executor. Immediate resolve."); // 4
    resolve("Yoshi");
});

ninjaImmediatePromise.then(ninja => {
    console.log(ninja === "Yoshi", " ninjaImmediatePromise resolve handled with Yoshi"); // 6
});

console.log("At code end"); // 5


// output:
// At code start.
// ninjaDelayedPromise executor
// after creating ninjaDelayedPromise
// ninjaImmediatePromise executor. Immediate resolve.
// At code end
// true  ninjaImmediatePromise resolve handled with Yoshi
// Resolving ninjaDelayedPromise
// true  ninjaDelayedPromise resolve handled with Hattori

/// ===================  END: Code Execution sequence ==================

// Promise.all

const getData = (parameter) => new Promise((resolve, reject) => {
    const interval = Math.round(Math.random() * 100);
    setTimeout(() => {
        if (interval > 60) {
            resolve({ parameter, interval });
        }
        reject({ parameter, interval, status: 'reject' })
    }, interval);
});

Promise.all([getData('one'), getData('two'), getData('three')]).then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// output 
// 1. If all request resolved successfully
// [
//     { parameter: 'one', interval: 84 },
//     { parameter: 'two', interval: 97 },
//     { parameter: 'three', interval: 70 }
// ]

// 2. If any of them get failed
// { parameter: 'three', interval: 18, status: 'reject' }

//================================================================================

// Promise.race
// return the first resolve or rejected request from the request array

const getData1 = (parameter) => new Promise((resolve, reject) => {
    const interval = Math.round(Math.random() * 100);
    setTimeout(() => {
        if (interval > 50) {
            resolve({ parameter, interval });
        }
        reject({ parameter, interval, status: 'reject' })
    }, interval);
});

Promise.race([getData1('one'), getData1('two'), getData1('three')]).then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// output: 
// 1. For resolved
// { parameter: 'two', interval: 83 }
// 2. For rejected
// { parameter: 'one', interval: 19, status: 'reject' }