/**
 * Arrow functions preserve the context of this at their point of definition
 * Defining functions with the function keyword does not do this.
 * If a function needs to be passed around and the context of this preserved
 * to the original defining object, it should be done using an arrow function
 * Arrow functions are ES6 feature
 */

const abby = {
    firstName: 'Abby',
    lastName: 'Adams',
    sayHello: function() {
        console.log(this);
        console.log(`Hello, my name is ${this.firstName}`);
    },
    delayedSayHello: function() {
        // Callback function
        setTimeout(() => this.sayHello(), 2000);
    }
};

abby.sayHello();

abby.delayedSayHello();