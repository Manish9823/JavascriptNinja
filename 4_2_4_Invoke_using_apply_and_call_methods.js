
// Here a method can be invoke using function.apply() and function.call method
// Both are same, the key difference is in the passing parameter

// 1. function.apply({}, arguments[])
// -- 1st parameter: function context
// -- 2nd parameter: array of arguments

// 2. function.call({}, argument1, argument2, .....);
// -- 1st parameter: function context
// -- 2nd and more: arguments


// ------ e.g.------------------

function numbersSum() {
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum += element
    }
    this.sum = sum;
}

const ninja1 = {};
const ninja2 = {};

numbersSum.apply(ninja1, [1, 2, 3, 4, 5, 6]);

numbersSum.call(ninja2, 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(ninja1, ninja2)  // { sum: 21 } { sum: 45 }



// ---------- Passing context and play -----------

function isPrimeNumber(number) {
    let dictionary = this.dictionary;
    if (dictionary[number]) {
        return `${number} is ${dictionary[number]}. and returning from context\n`;
    }
    let flag = true;
    for (let index = 3; index <= number / 2; index++) {
        if (number % index === 0) {
            flag = false;
            break;
        }
    }
    dictionary[number] = flag ? 'prime' : 'not prime';
    this.dictionary = dictionary;
    return `${number} is ${dictionary[number]}. and returning by calculating\n`;
}

const usingApply = { dictionary: { 1: 'prime', 2: 'prime', 3: 'prime' } };
const usingCall = { dictionary: { 1: 'prime', 2: 'prime', 3: 'prime' } };

const result3Apply = isPrimeNumber.apply(usingApply, [3]);  // 3 is prime. and returning from context
const result3Call = isPrimeNumber.call(usingCall, 3);   // 3 is prime. and returning from context

const result7Apply = isPrimeNumber.apply(usingApply, [7]);  // 7 is prime. and returning by calculating
const result7Call = isPrimeNumber.call(usingCall, 7);   // 7 is prime. and returning by calculating


const result7ApplyAgain = isPrimeNumber.apply(usingApply, [7]);  // 7 is prime. and returning from context
const result7CallAgain = isPrimeNumber.call(usingCall, 7);   // 7 is prime. and returning from context


console.log(result3Apply, result3Call, result7Apply, result7Call, result7ApplyAgain, result7CallAgain);

// 3 is prime. and returning from context
//  3 is prime. and returning from context
//  7 is prime. and returning by calculating
//  7 is prime. and returning by calculating
//  7 is prime. and returning from context
//  7 is prime. and returning from context

// --------------------------------------------------


// ------------- START: Building 'forEach' method to demonstrate setting a function context

function forEach(list, callback) {
    for (let n = 0; n < list.length; n++) {
        callback.call(list[n], n);  // here the list[n] is function context, n is arguments which is the index
    }
}

const weapons = [{ type: 'shuriken' }, { type: 'katana' }, { type: 'nunchucks' }];

forEach(weapons, function (index) {
    if (this === weapons[index]) {
        console.log(`context matched => Got the expected value ${this.type}`);
    } else {
        console.log(`context not matched => this.type is ${this.type} and weapons[index].type is ${weapons[index].type}`)
    }
});

// Outputs -
// context matched => Got the expected value shuriken
// context matched => Got the expected value katana
// context matched => Got the expected value nunchucks

// ------------- END: Building 'forEach' method to demonstrate setting a function context
