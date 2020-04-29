// Importing fs module from NodeJS
const fs = require('fs');

/*
    A callback function is a function that is passed as an argument to another
    function such that it can be invoked later by that function's execution.
*/

/* In this example () => console.log('hello') is a callback function */
// setTimeout(() => console.log('hello'), 1500);

/* 
Whoever has to implement setTimeout - they need to be able to invoke a function
that doesn't exist yet 
*/

/*
    If we were to do the same thing in Java, we would need to:
    Developer of setTimeout
    1. create Interface Delayable that defines an abstract function 
    2. Create setTimeout function which accepts an instance of Delayable
    3. Invoke known method signature of Delayable interface after timeout

    User of setTimeout
    1. Implement the interface Delayable, providing a concrete implementation
    2. Pass our custom implementation to setTimeout as a kind of Delayable
*/

function someFunction() {
    console.log('Alternative function');
}

function randomAction(callbackA, callbackB) {
    if(Math.random() > 0.5) {
        callbackA();
    } else {
        callbackB();
    }
}

// Why does writing a file require a callback function?
// writeFile is an asynchronous operation
setTimeout(() => {
    fs.writeFile('./my-file6.txt', 'Goodbye Everyone!', () => {
        console.log('File write complete!');
        fs.readFile('./my-file6.txt', (err, data) => {
            console.log(data.toString())
        })
    });
}, 1);

// We cannot guarantee that the file will exist when execution reaches this point
// fs.readFile('./my-file6.txt', (err, data) => {
//     console.log(data.toString())
// })
console.log('Final line');