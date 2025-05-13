
// Can we do inheritance using the prototype method ??

function Person() {
    this.dance = true;
    this.run = true;
}
Person.prototype.canDance = function () { return this.dance };

function Ninja() { }
Ninja.prototype = Person.prototype;

const ninja = new Ninja();

console.log(typeof ninja.canDance === 'function', " In ninja canDance function exists?") // true
console.log(ninja.canDance(), " Can dance?") // undefined
console.log(ninja instanceof Ninja, " ninja is instance of Ninja"); // true
console.log(ninja instanceof Person, " ninja is instance of Person") // true
console.log(ninja.dance, " ninja can access the parent this.dance property of Person?") // undefined

// Here if you take a deep look that the ninja can access the canDance method using the prototype chain but the value of this is undefined
// Because the Person object is yet to create, here we are just doing the prototype chaining

// To achieve the Person Object we have to assign the Ninja Prototype a Person object

console.log("=================== After changing the prototype =======================")

Ninja.prototype = new Person();

const ninja2 = new Ninja();

console.log(typeof ninja2.canDance === 'function', " In ninja2 canDance function exists?") // true
console.log(ninja2.canDance(), " Can dance?") // true
console.log(ninja2 instanceof Ninja, " ninja2 is instance of Ninja"); // true
console.log(ninja2 instanceof Person, " ninja2 is instance of Person") // true

// Using this way we can access the Person properties in Ninja as well
console.log(ninja2.dance, " ninja2 can access the parent this.dance property of Person.") // true



/// =================  Problem of overriding the constructor property ==============
// Here by setting the new Person objects as a prototype of the Ninja constructor 
// we've lost our connections to the Ninja Constructor that was previously kept by the original Ninja prototype.
console.log("=================  Problem of overriding the constructor property ===============");

console.log(ninja2.constructor === Ninja, " ninja2 constructor belongs to Ninja? ") // false

const ninja3 = new ninja2.constructor();

console.log({ ninja2 }); // ninja2 belongs to Person, not to Ninja
// { ninja2: Person {} }

console.log({ ninja3 }); // ninja3 belongs to Person, not to Ninja
// { ninja3: Person { dance: true, run: true } }
