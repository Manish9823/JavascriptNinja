
// 1. What point to an object that will be searched if the target object doesn't have the searched-for property.
// ans: prototype

// 2.  What will be the value of a1.
function Ninja() { }
Ninja.prototype.talk = function () {
    return "Hello";
}
const ninja = new Ninja();
const a1 = ninja.talk();
console.log({ a1 }); // Hello
// =============================================


// 3. What will be the value of a2
function Ninja1() { }
Ninja1.message = "Hello";
const ninja1 = new Ninja1();
const a2 = ninja.message;
console.log({ a2 }) // undefined
const a22 = Ninja1.message;
console.log({ a22 }) // Hello
// =============================================================

// 4. difference (theory based.)

// first fragment
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () { return this.firstName + " " + this.lastName };
}

// second fragment
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
Person1.prototype.getFullName = function () { return this.firstName + " " + this.lastName }

const person = new Person("Heera", "Lal");
const person1 = new Person1("Panna", "Lal");
console.log(person.getFullName(), " and ", person1.getFullName());

// Difference
// a. first Fragment
// In the first fragment, the method is defined inside the constructor.
// This creates a new copy of the method for each object instance.
// It uses more memory, especially with many instances.
// Allows easy per-instance customization of methods.

// b. second Fragment
// In the second fragment, the method is defined on the prototype.
// All instances share the same method from the prototype.
// This is more memory-efficient and faster for many objects.
// Prototype-based methods are easier to inherit and override.
// The second approach is more idiomatic in JavaScript OOP.
// Both work, but prototype-based is generally preferred.

// =====================================================================


// 5. what will be the ninja.constructor

function Person2() { }
function Ninja2() { }
const ninja2 = new Ninja2();
console.log(ninja2.constructor); // Ninaj2
// ====================================================================

// 6. what will be the ninja.constructor

function Person3() { }
function Ninja3() { }
Ninja3.prototype = new Person3();
const ninja3 = new Ninja3();
console.log(ninja3.constructor); // Person3
// ====================================================================

// 7. Explain how the instanceof operator works in the following example.
function Warrior() { }

function Samurai() { }
Samurai.prototype = new Warrior();

const samurai = new Samurai();

console.log(samurai instanceof Warrior) // Explain

// Here, Samurai.prototype is set to a new instance of Warrior, 
// so when we create a samurai object using new Samurai(), its prototype chain includes Warrior. 
// Therefore, samurai instanceof Warrior returns true because Warrior.prototype exists in its prototype chain.

// ===================================================================================

// 8. Translate the following ES6 code into ES5 code.

// Provided ES6 implementation
class Warrior1 {
    constructor(weapon) {
        this.weapon = weapon;
    }
    wield() {
        return "Wielding " + this.weapon;
    }
    static due1(warrior1, warrior2) {
        return warrior1.wield() + " " + warrior2.wield();
    }
}

// Translated ES5 implementation

function Warrior2(weapon) { this.weapon = weapon };
Warrior2.prototype.wield = function () { return "Wielding " + this.weapon; }
Warrior2.due1 = function (warrior1, warrior2) {
    return warrior1.wield() + " " + warrior2.wield();
}

// ==============================================================