/*
    Variable declaration and Variable Scope
    JavaScript is a loosely typed language. 

    Prior to ES6 JS, there was one specific keyword for declaring a variable.
    1. var
        After ES6, two new keywords were introduced
    2. let
    3. const

    var vs let
    Variables declared with var have fewer possible scopes than those declared
    with let. Scope is way of describing where within code execution a variable
    is considered valid and referenceable. Any variable declared with var can have
    one of two scopes:
    1) Function Scope - The variable is scoped to the function it is declared within.
    2) Global Scope - The variable is scoped to the global session. 

    Variables declared with let and const can be in block scope in addition
    to the scopes available to var.
    3) Block Scope - The variable is scoped to a code block (if statement, loop, etc)

    Hoisting - Hoisting is a behavior of variables declared using the 'var' keyword.
    This behavior causes the declaration (but not the assignment) of a variable
    to be lifted to the top of its scope.

    const - Has the same scoping behavior as let. We cannot reassign a new value
    to a variable that is declared with const.
*/

var x = 20;
var name = 'Abby';

let y = 10;
let lastName = 'Adams';
lastName = 30;

/*
    A function is code abstracted to a reusable function that can be called
    when needed.
*/
const myFunction = function() {
    // Arbitrary block
    {
        var myVar = 'hello'; // var will be scoped to the function
        let myLet = 'world'; // let will be scoped to this block
        console.log(myLet);
    }
    
    console.log(myVar);
    // console.log(myLet); // Error - myLet is not defined
}

// myFunction();
// console.log(myVar);

const hoistingExample = function() {
    // var myVar;
    console.log(myVar);
    console.log('function starting');

    var myVar = 'hello';
    // myVar = 'hello';
    let myLet = 'world';
    console.log(myVar);
}

hoistingExample();