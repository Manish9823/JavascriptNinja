
// another type of object is Array
// Array operations

const arr = [];

// 1. insert operation
arr.push(3); // [3]  // Add item at the last
arr.push(8); // [3, 8]  // Add item at the last

arr.unshift(5); // [5, 3, 8]  // Add item at the start
arr.unshift(6); // [6, 5, 3, 8]  // Add item at the start

arr[6] = 2; // [6, 5, 3, 8, undefined, 2] // Add element at position and if the previous element not present the add undefined at missing place

arr.length = 10; // [6, 5, 3, 8, undefined, 2, undefined, undefined, undefined, undefined] // Add undefined up to the length

arr.splice(2, 0, 7, 1); // [6, 5, 7, 1, 3, 8, undefined, 2, undefined, undefined, undefined, undefined]  // Add item at any position 
// Here (2, 0, 7, 1) => 2 belongs to index to start, 0 is not to remove any element, (7,1) is to add  


// 2. remove operation
arr.splice(2, 2); // [6, 5, 3, 8, undefined, 2, undefined, undefined, undefined, undefined]  // Removed the items at any position
// Here (2, 2) => 2 belongs to index to start and 2 is a count to delete the items

arr.length = 4; // [6, 5, 3, 8]  // Adjust the length by removing the elements

arr.pop(); // [6, 5, 3]  // Remove item from last

arr.shift(); // [5, 3] // Remove item from start


// 3. Iteration
for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    console.log(element);
}

arr.forEach((element) => { console.log(element) });



// 4. Mapping
arr.push(...[4, 9, 2]); // [ 5, 3, 4, 9, 2 ]

const arr1 = arr.map(item => item * 10);
console.log(arr1); // [ 50, 30, 40, 90, 20 ]


// 5. Testing
const oddExists = arr.some(item => item % 2 !== 0);
console.log({ oddExists });  // true

const negativeExists = arr.some(item => item < 0);
console.log({ negativeExists });  // false

const allOdds = arr.every(item => item % 2 !== 0);
console.log({ allOdds });  // false

const allGreaterThanOne = arr.every(item => item > 1);
console.log({ allGreaterThanOne });  // true

// 6. Searching
const oneEven = arr.find(item => item % 2 === 0); // 4  // returns the first element that matches the condition, return undefined if not matched

const allEvens = arr.filter(item => item % 2 === 0); // [4, 2] // returns array that matches the condition, return [] if not matched

// 7. Sorting
const sortedArr = arr.sort((a, b) => a - b); // [ 2, 3, 4, 5, 9 ]
// -1 (or any negative number) if b is greater than a
// 0 if a is equal to b
// 1 (or any positive number) if a is greater than b 

// 8. Aggregate 
const initialSum = 0;
const totalSum = arr.reduce((previousValue, number) => previousValue + number, initialSum);
console.log({ totalSum }) // 23
