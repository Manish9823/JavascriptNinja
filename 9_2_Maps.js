
// Maps

// object can be used as Map, but there is some downside of it as follows
// Objects in JS are lousy maps because you can only use string values as keys and because there's always the risk of accessing prototype properties
// And also if want a size (element count) then we have to iterate over it.

// e.g.
const element1 = { name: 'abc' };
const element2 = { item: 'xyz' };
const objectMaps = {}
objectMaps[element1] = { age: '22' };
objectMaps[element2] = { age: '21' };

console.log(objectMaps[element1]); // { age: '21' }
console.log(objectMaps[element2]); // { age: '21' }
console.log({ objectMaps })  // { objectMaps: { '[object Object]': { age: '21' } } }
console.log(element1.toString()); // '[object Object]'
console.log(element2.toString()); // '[object Object]'

// Here the element1 is converted into a string '[object Object]'


// ==========================================================

// Same functionality using 'Map'

const map = new Map();
map.set(element1, { age: '22' }); // Set the value as { name: 'abc' } => { age: '22' }
map.set(element2, { age: '21' }); // Set the value as { name: 'xyz' } => { age: '21' }

console.log(map.get(element1)); // { age: '22' }
console.log(map.get(element2)); // { age: '21' }
console.log({ map });
// output
// {
//   map: Map(2) {
//     { name: 'abc' } => { age: '22' },
//     { item: 'xyz' } => { age: '21' }
//   }
// }

console.log(map.size); // 2
console.log(map.keys()); // { { name: 'abc' }, { item: 'xyz' } }
console.log(map.values()); // { { age: '22' }, { age: '21' } }
console.log(map.has(element2)); // true 
console.log(map.delete(element2)); // true



// Iterating over map

const directory = new Map();
directory.set("Yoshi", "9846376253");
directory.set("Kuma", "7735627625");
directory.set("Hiro", "8192039239");

for (let item of directory) {
    console.log("Key: ", item[0], ", Value: ", item[1]);
}
// Output
// Key:  Yoshi , Value:  9846376253
// Key:  Kuma , Value:  7735627625
// Key:  Hiro , Value:  8192039239

for (let key of directory.keys()) {
    console.log("Key: ", key, ", Value: ", directory.get(key));
}
// Output
// Key:  Yoshi , Value:  9846376253
// Key:  Kuma , Value:  7735627625
// Key:  Hiro , Value:  8192039239

for (let value of directory.values()) {
    console.log("Value: ", value);
}
// Output
// Value:  9846376253
// Value:  7735627625
// Value:  8192039239