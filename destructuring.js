/* 'Simple' syntax for extracting values from a data structure (arrays/objects) */

// We want to assign the values 1 2 3, to variables a b c
// let a = 1;
// let b = 2;
// let c = 3;
// [a, b, c] - Array Destructuring Syntax - a, b, and c are assigned values
// from the array on the right hand side of the expression
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

console.log(typeof a);

let [d, e, ...f] = [4, 5, 6, 7, 8, 9];
console.log(d, e, f);

// Given two integer values, swap the values without creating a third variable.
let x = 10;
let y = 7;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

/* Object Destructuring */
/* Objects properties are not necessarily 'ordered'. If an order exists it is not
significant, and in most cases is not known at all. Instead, properties are accessed
by their key names.  For this reason, destructuring an object utilizes their key
names by default. */

const person = {
    firstName: 'Abby',
    lastName: 'Adams',
    birthdate: new Date('2000-01-01')
};

const { firstName: name, birthdate: date, ...extras} = person;
// console.log(firstName, birthdate);
console.log(name, date, extras);