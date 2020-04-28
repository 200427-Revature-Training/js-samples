let x = 10;
let str = 'Hello world';
let bool = true;
let arr = [1, 2, 3];
let date = Date();
let symbol = Symbol('myApp');
let myUndefined = undefined;
let myNull = null;
let bigInt = BigInt(100);
let myObject = {
    myKey: 'myValue',
    a: 'Hello'
};

// Arrow Function (lambda function)
// let myFunction = () => {};

function myFunction() {

}

/*
    JavaScript Types
    1. number - (Java Double)
    2. string
    3. boolean
    4. object
    5. symbol
    6. undefined
    7. bigint
    8. function (not necessarily a data type)
*/

console.log(typeof x); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof arr); // object
console.log(typeof date); // string
console.log(typeof symbol); // symbol
console.log(typeof myUndefined); // undefined
console.log(typeof myNull); // object
console.log(typeof bigInt); // bigint
console.log(typeof myObject); // object
console.log(typeof myFunction); // function