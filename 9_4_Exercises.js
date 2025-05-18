

// 1. 
const samurai = ["Oda", "Tomoe"];
samurai[3] = "Hattori";
console.log(samurai); // ["Oda", "Tomoe", undefined, "Hattori"]

// 2.

const ninjas = [];
ninjas.push("Yoshi"); // ["Yoshi"]
ninjas.unshift("Hattori"); // ["Hattori", "Yoshi"]
ninjas.length = 3; // ["Hattori", "Yoshi", undefined]
ninjas.pop(); // ["Hattori", "Yoshi"]
console.log(ninjas)  // ["Hattori", "Yoshi"]

// 3. 
const samurai1 = [];
samurai1.push("Oda"); // ["Oda"] 
samurai1.unshift("Tomoe"); // ["Tomoe", "Oda"]
samurai1.splice(1, 0, "Hattori", "Takeda"); // ["Tomoe", "Hattori", "Takeda", "Oda"]
samurai1.pop();
console.log(samurai1) // ["Tomoe", "Hattori", "Takeda"]

// 4.
const persons = [{ name: "Yoshi", age: 18 }, { name: "Hattori", age: 19 }, { name: "Yagyu", age: 20 }];
const first = persons.map(ninja => ninja.age); // [18, 19, 20]
const second = first.filter(age => age % 2 === 0); // [18, 20]
const third = first.reduce((aggregate, item) => aggregate + item, 0) // 57
console.log({ first, second, third }); // { first: [ 18, 19, 20 ], second: [ 18, 20 ], third: 57 }

// 5.
const ninjas1 = [{ name: "Yoshi", age: 18 }, { name: "Hattori", age: 19 }, { name: "Yagyu", age: 20 }];
const first1 = ninjas1.some(ninja => ninja.age % 2 === 0); // true
const second1 = first.every(age => age % 2 === 0); // false
console.log({ first1, second1 }); // { first1: true, second1: false }  

// 6.

const samuraiClanMap = new Map();

const samurai11 = { name: "Toyotomi" };
const samurai22 = { name: "Takeda" };
const samurai33 = { name: "Akiyama" };

const oda = { clan: "Oda" };
const tokugawa = { clan: "Tokugawa" };
const takeda = { clan: "Takeda" };

samuraiClanMap.set(samurai11, oda);
samuraiClanMap.set(samurai22, tokugawa);
samuraiClanMap.set(samurai22, takeda);

console.log(samuraiClanMap.size === 3, " There are three mapping"); // false
console.log(samuraiClanMap.has(samurai11), " The first samurai has a mapping"); // true
console.log(samuraiClanMap.has(samurai33), " The third samurai has a mapping"); // false


// 7.

const samurai44 = new Set("Toyotomi", "Takeda", "Akiyama", "Akiyama");
console.log(samurai44.size === 4, " There are four samurai in the set"); // false

samurai44.add("Akiyama");
console.log(samurai44.size === 5, " There are five samurai in the set"); // false

console.log(samurai44.has("Toyotomi"), " Toyotomi is in"); // true
console.log(samurai44.has("Hattori"), " Hattori is in!"); // false
