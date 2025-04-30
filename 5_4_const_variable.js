
const firstConst = "samurai";

console.log(firstConst === 'samurai', " firstConst is a samurai");

try {
    firstConst = "ninja";
    console.log("successfully override firstConst variable.")
} catch (error) {
    console.log("Unable to update firstConst.")
}

console.log(firstConst === 'samurai', " firstConst is still a samurai!");

const secondConst = {};

secondConst.weapon = "wakizashi";
console.log(secondConst.weapon === 'wakizashi', " we can add new properties");

const thirdConst = [];
console.log(thirdConst.length === 0, " No items in our array.");

thirdConst.push("Yoshi");

console.log(thirdConst.length === 1, " The array has changed.");