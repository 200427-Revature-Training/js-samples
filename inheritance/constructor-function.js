/* Beyond Object.create, JS was eventually updated to include a more traditional
approach to inheritance.  This involved the inclusion of the 'new' keyword and
a way of defining functions to create objects for us - these functions are referred
to as 'constructor functions'.  Creating a constructor function is easy - just
create a function that assigns values using 'this' and call the function with
the 'new' keyword */

/*  */
const Person = function(firstName, birthdate) {
    this.firstName = firstName;
    this.birthdate = birthdate;

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.firstName}`);
    }

    this.sayBirthday = function() {
        console.log(`My birthday is ${this.birthdate}`)
    }
}

const abby = new Person('Abby', new Date());
const billy = new Person('Billy', new Date());
console.log(Person);
console.log(abby);

abby.sayHello();
abby.sayBirthday();
billy.sayHello();

// Aside regarding resolution of 'this' 
const functionCaller = {
    firstName: 'functionCaller',
    callFunction: function(f) { console.log(this); f(); }
}

functionCaller.callFunction(() => abby.sayHello());