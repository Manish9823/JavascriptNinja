
// In javascript we can chain the one object with another object

const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

// Here the "skulk" in yoshi => yoshi.hasOwnProperty("skulk");
console.log("skulk" in yoshi, " Yoshi can skulk"); // true
console.log("sneak" in yoshi, " Yoshi can sneak"); // false
console.log("creep" in yoshi, " Yoshi can creep"); // false

console.log('setting the prototype for yoshi and hattori ------------------------')
Object.setPrototypeOf(yoshi, hattori);


console.log("sneak" in yoshi, " Yoshi can sneak"); // true
console.log("creep" in yoshi, " Yoshi can creep"); // false

console.log('setting the prototype for hattori and kuma ------------------------')
Object.setPrototypeOf(hattori, kuma);

console.log("creep" in hattori, " Yoshi can sneak"); // true
console.log("creep" in yoshi, " Yoshi can creep"); // true

// But this is one directional only mean yoshi object inherite hattori and hattori inherite kuma
// yoshi --> hattori --> kuma

console.log('Inheritance rules ----------------------')
// so 
console.log("skulk" in hattori, " Hattori can skulk"); // false
console.log("sneak" in kuma, " Kuma can sneak"); // false
console.log("skulk" in kuma, " Kuma can skulk"); // false



// ======================================================================

// Creating a new instance with a prototype method

function Ninja() { }
Ninja.prototype.swingSword = function () {
    return true;
}

const ninja1 = Ninja();
console.log(ninja1, " No instance of Ninja Created.");

const ninja2 = new Ninja();
console.log({ ninja2 }, { swingSword: ninja2.swingSword }, " instance of Ninja exists and method is callable.");


// ===============================================

// Here we can see that the getSwordOwner method is the object method  { swordOwner: "Yoshi", getSwordOwner: Function}
// when we create a object "ninja3" with new keyword the new object get created for this the above one object is created
// and we create a prototype method of a function with same name as the object method so the first preference goes to the object property
// when we call the prototype method with object "ninaj3" it first find it in the object and then after in prototype method.

function Ninja1() {
    this.swordOwner = "Yoshi";
    this.getSwordOwner = () => {
        return this.swordOwner;
    }
}

Ninja1.prototype.getSwordOwner = function () {
    return "Hattori ";
}


Ninja1.prototype.getSwordOwner1 = function () {
    return "Hattori ";
}

const ninja3 = new Ninja1();


console.log(ninja3.getSwordOwner()); // Yoshi
console.log(ninja3.getSwordOwner1()); // Hattori 

// =======================================================

// Playing with number prototype

const num = new Number(Math.floor(Math.random() * 10));
Number.prototype.square = function () {
    const number = this.valueOf();
    return number * number;
}
console.log({ number: num.valueOf(), square: num.square() });

// ==================================================

const number=2;
console.log(number, number.__proto__," number.__proto__");

