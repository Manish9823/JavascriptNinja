

// As the Nature of Dynamic Prototype of JavaScript there is also a side effect of it

function Ninja() {
    this.swing = true;
}

const ninja1 = new Ninja();

Ninja.prototype.swingSword = function () {
    return this.swing;
}

console.log(ninja1.swingSword(), " ninja1 can swing sword."); // true

Ninja.prototype = {
    pierce: function () {
        console.log('this.swing = ', this.swing)
        return true;
    }
}

// Checking that the swingSword overrided with pierce method
console.log(ninja1.swingSword(), " ninja1 can still swing sword."); // true


const ninja2 = new Ninja();
console.log(ninja2.pierce(), " ninja2 can pierce.") // true
console.log(typeof ninja2.swingSword === 'function', ' Ninja2 can use swingSword?.') // false

console.log(typeof ninja1.pierce === 'function', " ninaj1 can access the pierce function?") // false