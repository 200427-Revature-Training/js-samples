/*
    Functions in JavaScript are often referred to as 'first class members' or
    'first class objects'. These names are meant to contrast functions in JS from
    methods in other languages such as Java or C#.  In those languages functions 
    strictly attached to objects based on class definition and cannot be changed.
    However, in JavaScript functions can be treated like any other variable. We
    can assign a function to another variable. We can pass functions as parameters
    to other functions. Functions themselves can return functions.
*/

/*
    Very simple usecase for a function, provide reusable
    logic that can be called on demand
*/
function hello() {
    console.log('Hello!');
}

hello();
hello();
hello();


/*
    Function Parameter - Value or values passed to a function
    from the caller
*/
function saySomething(something) {
    console.log(something);
}

saySomething('Hello');
saySomething('World');


/*
    Functions can return values using the 'return' keyword
*/
function sum(a, b) {
    return a + b;
}

const x = sum(5, 10);
console.log(x);

function defaultSum(a = 1, b = 2) {
    return a + b;
}

console.log(defaultSum()); // 3
console.log(defaultSum(5)); // 7
console.log(defaultSum(5, 10)); // 15
console.log(defaultSum(undefined, 5));

// function createObject(name, favoriteFood) {
//     const myObject = {
//         name: name,
//         favoriteFood: favoriteFood
//     };
//     console.log(myObject.name);
//     return myObject; // returning a reference to the object
// }

// const myObject = createObject('Abby', 'Ice Cream');
// console.log(myObject.favoriteFood);

// // Parameters
// // JavaScript does not care what or how many parameters you provide to it
// // These are all valid:
// sum();
// sum(1);
// sum(1, 2, 3);

// // Rest Operator - Gathers extra values into a data structure
// // that can then be utilized
// function parameterTest(a, b, ...c) {
//     console.log(a, b, c);
// }

// parameterTest(1, 2);
// parameterTest(1); // Any variable not present is considered undefined
// parameterTest(1, 2, 3); 
// // The rest operator gathers extra values into an array
// parameterTest(1, 2, 3, 4, 5, 6, 7); 