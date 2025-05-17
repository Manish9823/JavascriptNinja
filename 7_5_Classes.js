
// Classes in ES6

// ES6 has introduced the class keyword under the hook there is old prototypes.

// E.g

// =================  Ninja using class keyword
class Ninja {
    constructor(name) {
        this.name = name;
    }
    swingSword() {
        return true;
    }
}

const ninja = new Ninja("Yoshi");

// ================= Ninja1 using prototype
function Ninja1(name) {
    this.name = name;
}
Ninja.prototype.swingSword = function () { return true };

const ninja1 = new Ninja("Yoshi");

// =============================================================================

// ======================  Static Methods And Private Methods

class Ninja2 {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    swingSword() { return true }

    static compare(ninja1, ninja2) {
        return ninja1.level - ninja2.level;
    }
}
const ninja2 = new Ninja2("Yoshi", 4);
const ninja3 = new Ninja2("Hattori", 3);

// Trying to access Static method
console.log(("compare" in ninja2), " compare method is accessible by ninja2 instance?") // false
console.log(("compare" in ninja3), " compare method is accessible by ninja3 instance?") // false

// Accessing the Static method using the Class Name
console.log(Ninja2.compare(ninja2, ninja3) > 0, " The Ninja2 class can do the comparison"); //true

// Trying to access the class method using Class Name
console.log(("swingSword" in Ninja2), " The Ninja2 class can swing a sword?") // false 

// Accessing the class method using the class instance
console.log(ninja2.swingSword(), " ninja2 can swing a sword") // true
console.log(ninja3.swingSword(), " ninja3 can swing a sword") // true


// Static method in old implementation (Using Prototype)
function Ninja3() { }
Ninja3.compare = function (ninja2, ninja3) { }

// =============================================================================


//  =========================  Inheritance ====================

// Inheritance in ES5 code (using prototype | old implementation)

function Person(name) { this.name = name }
Person.prototype.dance = function () { return true }

function Ninja4() { }
Ninja4.prototype = new Person("Yoshi");

Object.defineProperty(Ninja4, "constructor", { enumerable: false, value: Ninja4, writable: true });

const ninja4 = new Ninja4();
console.log(ninja4 instanceof Ninja4, " ninja4 is instance of Ninja4.") // true
console.log(ninja4 instanceof Person, " ninja4 is instance of Person.") // true
console.log(ninja4.dance(), " ninja4 can access the dance method of parent Person"); // true
console.log(ninja4.name, " ninja4 can access the name property of parent Person"); // Yoshi

// There's a lot to keep in mind here. Methods accessible to all instances should be directly to the prototype of the constructor function

// ==============  Inheritance in ES6 code (using class | new Implementation)
// Here in ES6 a new keyword is introduced for inheritance "extends"

class Person1 {
    constructor(name) { this.name = name }
    dance() { return true; }
}
class Ninja5 extends Person1 {
    constructor(name, weapon) {
        super(name);
        this.weapon = weapon;
    }
    wieldWeapon() {
        return true;
    }
}

const ninja5 = new Ninja5("Yoshi", "Wakizashi");
console.log(ninja5 instanceof Ninja5, " ninja5 is instance of Ninja5.") // true
console.log(ninja5 instanceof Person1, " ninja5 is instance of Person1.") // true
console.log(ninja5.dance(), " ninja5 can access the dance method of parent Person1"); // true
console.log(ninja5.name, " ninja5 can access the name property of parent Person1"); // Yoshi
console.log(ninja5.weapon, " ninja5 can access the weapon property of Ninja5"); // Wakizashi
console.log(ninja5.wieldWeapon(), " ninja5 can access the wieldWeapon method of Ninja5"); // true

// ==================================================================================================
