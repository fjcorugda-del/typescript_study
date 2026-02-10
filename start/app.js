// console.log ('Hello Febe!');
/**************************************************
 * Lecture 3: Variables in Typescript
 *
 */
// let num = 100; // we can simply assign variable at a later time
// num = 1000;
// const str = 'Hello, World'; // we need to initialize it immediately , value is not change all thru out of system
/**************************************************
 * Lecture 4: Data Type in TypeScript
 *


// 1. String datatype
const str1 = 'this is a string created ${str2} using single qoutes';
const str2 = 'this is a string created using double qoutes';
const str3 = `this is a string created "${str1} "
                using back ticks`; // write string using multiple lines

console.log(str1);
console.log(str3); */
//2. Number Type - always be floating point number
var num = 12; // 12.0
var pi = 3.14; // cannot found the datatype
//3. Boolean TypeError
var isEligible = true;
var isEqual = false;
console.log(Boolean(0)); //false
console.log(Boolean(100)); //true
console.log(Boolean('')); //false
console.log(Boolean(' ')); //true
console.log(Boolean(null)); //false
console.log(Boolean('Hello')); //true
// 0, '', null, undifined - falsey values
var isGreater = 10 < 15; // compare operation = boolean value
console.log(isGreater);
