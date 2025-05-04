"use strict";

// By Combining the generator and promises we can execute asynchronous code.

// function call with a function parameter
async(function* () {
    try {
        const firstData = yield getData("one");
        const secondData = yield getData(`${firstData.parameter}(${firstData.interval}), second`);
        const thirdData = yield getData(`${secondData.parameter}(${secondData.interval}), third`);
        return `${thirdData.parameter}(${thirdData.interval})`;
    } catch (error) {
        console.log("We weren't able to get the data.")
    }
});

// Defining the getData function
function getData(parameter) {
    return new Promise((resolve, reject) => {
        const interval = Math.round(Math.random() * 100);
        setTimeout(() => {
            resolve({ parameter, interval });
        }, interval);
    })
};

// Defining the async function
function async(generator) {
    const iterator = generator();

    function handle(iterationResult) {
        if (iterationResult.done) {
            console.log(iterationResult.value);
        }
        const iteratorValue = iterationResult.value;
        if (iteratorValue instanceof Promise) {
            iteratorValue.then(res => handle(iterator.next(res))).catch(error => console.log(error));
        }
    }
    try {
        handle(iterator.next());
    } catch (error) {
        iterator.throw(error);
    }
}

// output:
// one(69), second(56), third(69)


// ============ Same functionality using async and await


(async () => {

    const execute = async () => {
        try {
            const firstData = await getData("one");
            const secondData = await getData(`${firstData.parameter}(${firstData.interval}), second`);
            const thirdData = await getData(`${secondData.parameter}(${secondData.interval}), third`);
            return `${thirdData.parameter}(${thirdData.interval})`;
        } catch (error) {
            console.log("We weren't able to get the data.")
        }
    }

    const result = await execute();
    console.log(result); //one(86), second(22), third(61)

    // Defining the getData function
    function getData(parameter) {
        return new Promise((resolve, reject) => {
            const interval = Math.round(Math.random() * 100);
            setTimeout(() => {
                resolve({ parameter, interval });
            }, interval);
        })
    };
})()