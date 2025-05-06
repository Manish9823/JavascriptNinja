
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
