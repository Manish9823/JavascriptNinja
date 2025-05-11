
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

