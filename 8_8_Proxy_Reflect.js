
// Reflect is an object that provides methods for interacting with objects in a consistent way.It provides the
//  same operations as the internal JavaScript operations but exposes them in a way that you can call them
//  explicitly.These methods allow you to call the default behavior of an operation(for example, get, set, 
// delete), which is useful in Proxy traps to preserve default behavior while also adding your custom behavior.



const obj = { a: 10 };
const proxy = new Proxy(obj, {
    get(target, prop) {
        // Use Reflect to get the value
        return Reflect.get(...arguments);  // This will return the value of target[prop]
    }
});

console.log(proxy.a);  // Output: 10
