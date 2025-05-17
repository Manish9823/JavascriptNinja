
// As we already know a proxy is a surrogate object through which we control access to anther object. 
// A Proxy can define traps, functions that will be executed whenever a certain operation is performed on a proxy.
// Unfortunately there's also a downside. The fact that all our operations have to pass in through the proxy add a layer 
// of indirection that enables us to implements all these cool features, but at the same time it introduces a 
// significant amount of additional processing that impacts performance.

// e.g

function createNegativeArrayProxy(array) {
    if (!Array.isArray(array)) { throw new Error("Expected an Array"); }

    return new Proxy(array, {
        get: (target, index) => {
            index = +index;
            return target[index < 0 ? target.length + index : index];
        },
        set: (target, index, value) => {
            index = +index;
            target[index < 0 ? target.length + index : index] = value;
        }
    })
};

function measure(items) {
    const startTime = new Date().getTime();

    for (let i = 0; i < 500000; i++) {
        items[0] === "Yoshi";
        items[1] === "Kuma";
        items[2] === "Hattori";
    }
    return new Date().getTime() - startTime;
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];

const proxiedNinja = createNegativeArrayProxy(ninjas);

const proxiedNinjaMeasure = measure(proxiedNinja);
const ninjaMeasure = measure(ninjas);
console.log({ proxiedNinjaMeasure, ninjaMeasure });
// Output => { proxiedNinjaMeasure: 562, ninjaMeasure: 24 }

console.log("Proxies are around ", Math.round(proxiedNinjaMeasure / ninjaMeasure), " times slower");
// Output => Proxies are around  23  times slower
