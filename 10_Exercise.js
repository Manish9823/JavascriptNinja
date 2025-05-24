
// 1.

// 2. 

// 3. 

// 4

// 5. The regular expression /[^abc]/ matches which of the followings
console.log(/[^abc]/.exec('m o p q a')); // 'm' only one 

// 6. What is the correct expression for 'hello'
// /hello/ , /hell?o/, /hel*o/, /[hello]/
// ans => /hello/ , /hell?o/, /hel*o/  three

// 7. regular expression /(cd)+(de)*/ will match which of the following strings?

const cases = ['cd', 'de', 'cdde', 'cdcd', 'ce', 'cdcddedede'];
for (let index = 0; index < cases.length; index++) {
    const element = cases[index];
    console.log((/(cd)+(de)*/).test(element));
}
// Output
// true
// false
// true
// true
// false
// true

// 8.

// 9.

// 10. the regular expression /([0-5])6\1/ will match which of the following
const cases1 = ['060', '16', '261', '565'];
for (let index = 0; index < cases1.length; index++) {
    const element = cases1[index];
    console.log(/([0-5])6\1/.test(element));
}
// Output
// true
// false
// false
// true


// 11. regular expression /(?:ninja)-(trick)?-\1/ will match which of the following
const cases2 = ['ninja-', 'ninja-trick-ninja', 'ninja-trick-trick'];
for (let index = 0; index < cases2.length; index++) {
    const element = cases2[index];
    console.log(/(?:ninja)-(trick)?-\1/.test(element))
}
// Output
// false
// false
// true


// 12. what will the result of executing '012675'.replace(/[0-5]/g,"a");
console.log('012675'.replace(/[0-5]/g, "a"))  // => aaa67a