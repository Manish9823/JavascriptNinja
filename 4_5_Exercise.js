
// 1. write function with rest parameter

function sum(...args) {
    let sum = 0;
    for (let index = 0; index < args.length; index++) {
        sum += args[index];
    };
    return sum;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));


// 2. what is the value of ninja and samurai

function getSamurai(samurai) {
    "use strict";
    arguments[0] = "Ishida";
    return samurai;
}

function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}

const samurai = getSamurai('Toyotomi'); // Toyotomi
const ninja = getNinja('Yoshi'); // Fuma

console.log(samurai, ninja)


// 3. Which assertion will pass

function whoAmI1() {
    "use strict";
    return this;
}

function whoAmI2() {
    return this;
}
console.log(whoAmI1(), " Global Object ?"); // undefined
console.log(whoAmI2(), " Global Object ?"); // Global Object


// 4. Which assertion will pass

const ninja1 = {
    whoAmI: function () {
        return this;
    }
};

const ninja2 = {
    whoAmI: ninja1.whoAmI
}

const indentify = ninja2.whoAmI;

console.log(ninja1.whoAmI() === ninja1, ' ninja1?'); // true
console.log(ninja2.whoAmI() === ninja1, ' ninja1 again?'); // false

console.log(indentify() === ninja1, ' ninja1 again?'); // false

console.log(ninja1.whoAmI.call(ninja2) === ninja2, ' ninja2 here?'); //true


// 5. Which assertion will pass

function Ninja() {
    this.whoAmI = () => this;
}

const ninja3 = new Ninja();
const ninja45 = {
    whoAmI: ninja3.whoAmI
}

console.log(ninja3.whoAmI() === ninja3, " ninja3 here?");  // true
console.log(ninja45.whoAmI() === ninja45, ' ninja45 here?');  // false


// 6. Which assertion will pass

function Ninja1() {
    this.whoAmI = function () {
        return this;
    }.bind(this);
}

const ninja66 = new Ninja1();
const ninja77 = {
    whoAmI: ninja66.whoAmI
}

console.log(ninja66.whoAmI() === ninja66, " ninja66 here?");  // true
console.log(ninja77.whoAmI() === ninja77, ' ninja77 here?');  // false
