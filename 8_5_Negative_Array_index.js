

// Like Python, Ruby or Perl we can simulate the negative array indexes

// e.g 

const ninjas = ["Yoshi", "Kuma", "Hattori"];

console.log(ninjas[0]) // Yoshi
console.log(ninjas[1]) // Kuma
console.log(ninjas[2]) // Hattori

// But for now it will return undefined
console.log(ninjas[-1]) // undefined
console.log(ninjas[-2]) // undefined
console.log(ninjas[-3]) // undefined

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

const ninjas1 = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinja1 = createNegativeArrayProxy(ninjas1);

console.log(ninjas1[0]) // Yoshi
console.log(ninjas1[1]) // Kuma
console.log(ninjas1[2]) // Hattori

console.log(proxiedNinja1[0]) // Yoshi
console.log(proxiedNinja1[1]) // Kuma
console.log(proxiedNinja1[2]) // Hattori

// But for now it will return undefined
console.log(ninjas1[-1]) // undefined
console.log(ninjas1[-2]) // undefined
console.log(ninjas1[-3]) // undefined

// Using proxiedNinja1
console.log(proxiedNinja1[-1]) // Hattori
console.log(proxiedNinja1[-2]) // Kuma
console.log(proxiedNinja1[-3]) // Yoshi


proxiedNinja1[-1] = "Hachi"; // Overriding Hattori

// After setting
console.log(proxiedNinja1[-1]) // Hachi
console.log(proxiedNinja1[-2]) // Kuma
console.log(proxiedNinja1[-3]) // Yoshi