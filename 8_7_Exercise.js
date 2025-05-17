
// 1. which line will throw an exception

const ninja = {
    get name() {
        return "Akiyama";
    }
}

// a. ninja.name();
ninja.name;

// b. const name=ninja.name; 
const name = ninja.name;
/// =======================================================================

// 2.  ans: Property Descriptor mechanism

// 3. which console.log will pass

const daimyo = { name: "Matsu", clan: "Takasu" };
const proxy = new Proxy(daimyo, {
    get: (target, key) => {
        if (key === "clan") {
            return "Tokugawa"
        }
    }
});

console.log(daimyo.clan === "Takasu", " Matsu of clan Takasu"); // true
console.log(proxy.clan === "Tokugawa", " Matsu of clan Tokugawa"); // true

proxy.clan = "Tokugawa"; // this will also update the daimyo object

console.log(daimyo.clan === "Takasu", " Matsu of clan Takasu"); // false
console.log(proxy.clan === "Tokugawa", " Matsu of clan Tokugawa"); // true

/// =======================================================================

// 4. which console.log will pass

const daimyo1 = { name: "Matsu", clan: "Takasu", armySize: 10000 };
const proxy1 = new Proxy(daimyo1, {
    set: (target, key, value) => {
        if (key === "armySize") {
            const number = Number.parseInt(value);
            if (!Number.isNaN(number)) {
                target[key] = number;
            }
        } else {
            target[key] = value;
        }
    }
});

console.log(daimyo1.armySize === 10000, " Matsu has 10,000 men at arms"); // true
console.log(proxy1.armySize === 10000, " Matsu has 10,000 men at arms"); // true

proxy1.armySize = "large"; // it will not update the property
console.log(daimyo1.armySize === "large", " Matsu has a large army"); // false
console.log(proxy1.armySize === "large", " Matsu has a large army"); // false

daimyo1.armySize = "large"; // but it will update
console.log(daimyo1.armySize === "large", " Matsu has a large army"); // true
console.log(proxy1.armySize === "large", " Matsu has a large army"); // true
