
// Distinct items

const ninjas = new Set(["Kuma", "Hattori", "Yagyu", "Hattori"]);

console.log(ninjas.has("Hattori")) // true
console.log(ninjas.size); // 3

console.log(ninjas.has("Yoshi")) // false
ninjas.add("Yoshi");
console.log(ninjas.has("Yoshi")) // true
console.log(ninjas.size); // 4


for (let ninja of ninjas) {
    console.log(ninja);
}
// Output
// Kuma
// Hattori
// Yagyu
// Yoshi



// ==========================================================

const ninjas1 = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurais = new Set(["Hattori", "Oda", "Tomoe"]);

// Union of Sets
const warriors = new Set([...ninjas1, ...samurais]);
console.log({ warriors }); // { warriors: Set(5) { 'Kuma', 'Hattori', 'Yagyu', 'Oda', 'Tomoe' } }

// Intersection of Sets
const ninjaSamurais = new Set([...ninjas1].filter(ninja => samurais.has(ninja)))
console.log({ ninjaSamurais }); // { ninjaSamurais: Set(1) { 'Hattori' } }

// Difference of Sets
const pureNinjas = new Set([...ninjas1].filter(ninja => !samurais.has(ninja)))
console.log({ pureNinjas }); // { pureNinjas: Set(2) { 'Kuma', 'Yagyu' } }

const pureSamurai = new Set([...samurais].filter(samurai => !ninjas1.has(samurai)))
console.log({ pureSamurai }); // { pureSamurai: Set(2) { 'Oda', 'Tomoe' } }
