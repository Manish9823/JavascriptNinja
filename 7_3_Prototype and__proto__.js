
// =============  Number ===============
Number.prototype.square = function () {
    return this.valueOf() * this.valueOf();
}
const num = 2;
console.log("Number Square using custom prototype method :", num.square()); // 4


// =============  String ===============
String.prototype.doubleString = function () {
    return `${this.valueOf()} ${this.valueOf()}`;
}
const str = 'test';
console.log("String Double using custom prototype method: ", str.doubleString()); // test test


// =============  Boolean ===============
Boolean.prototype.toggleBoolean = function () {
    return !this.valueOf();
}
const bool = true;
console.log("Boolean toggle using custom prototype method: ", bool.toggleBoolean()); // false


// =============  Object ===============
Object.prototype.removeProperty = function (property) {
    if (!property) {
        return this.valueOf();
    }
    delete this.valueOf()[property];
    return this.valueOf();
}
const obj = { one: 1, two: 2 };
console.log("Object remove property using custom prototype method: ", obj.removeProperty('two'));
console.log({ obj })

// =============  Array ===============
Array.prototype.pushElement = function (element) {
    this.valueOf().push(element);
    return this.valueOf();
}
const arr = [1, 2, 3];
console.log("Array push element using custom prototype method: ", arr.pushElement(4));
console.log({ arr })

console.log(
    { "num.__proto__": num.__proto__ },
    { "str.__proto__": str.__proto__ },
    { "bool.__proto__": bool.__proto__ },
    { "obj.__proto__": obj.__proto__ },
    { "arr.__proto__": arr.__proto__ },
);







// ============================= But there is difference in function ==========
// Here the function context didn't change if we call the function directly

// =============  Function ===============
Function.prototype.changeContext = function () {
    this.valueOf().greet = 'hi';
    return this.valueOf();
}
function fun() { this.greet = "hello"; return this.greet; }
console.log("Boolean toggle using custom prototype method: ", fun.changeContext());
console.log(fun());  // hello


// ============= Prototype vs __proto__
// Here the __proto__ refer to the Class prototype
const val = 5;
console.log(val.__proto__ === Number.prototype, " For Number Case Both are same");  // true

function Test() { }
const test = new Test();
console.log(test.__proto__ === Test.prototype, " For Function Case Both are same"); // true



// ===================  Object Constructor =========================

function Ninja() { }

// here ninja is a newly created object 
const ninja = new Ninja();

console.log({ object: ninja, ninjaConstructor: ninja.constructor, ninjaPrototype: ninja.prototype, ninja__prot__: ninja.__proto__ });

// output
// {
//   object: Ninja {},
//   ninjaConstructor: [Function: Ninja],
//   ninjaPrototype: undefined,
//   ninja__prot__: {}
// }

console.log(typeof ninja === 'object', " Tye typeof the instance is object."); // true
console.log(ninja instanceof Ninja, " instance of identifies the constructor."); // true
// By using the .constructor property we can get the function reference where it was created from. [verify the origin]
console.log(ninja.constructor === Ninja, " The ninja object was created by the Ninja Function."); // true




// Creating new object using existing object constructor property

const ninja2 = new ninja.constructor();  // this is same as "const ninja2= new Ninja()"
console.log(ninja2 instanceof Ninja, " It's a instance of Ninja.");
console.log(ninja === ninja2, " But not the same Ninja"); // since the ninja and ninja2 both are different objects