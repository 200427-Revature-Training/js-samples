/*
    Inheritance is one of the four pillars of object oriented programming
    Inheritance allows us to reuse code for objects that serve similar tasks
    while also providing mechanism for diverging implementations.

    JavaScript features a particular kind of inheritance scheme called
    Prototypal Inheritance.

    Methods and fields defined on an object can be extended when the object
    is defined as a parent to another.  The child object is then able to 
    access any property on the parent which has not be redefined on the child.
*/

/* Object.create() */
/* Object.create was one of the original mechanisms for implementing
inheritance in JavaScript.  Object.create is a function that when passed
an object will return a new object that extends the object passed to it. */

const abby = {
    firstName: 'Abby',
    birthdate: new Date(),
    favoriteFood: 'Ice Cream'
};

console.log(abby);

const billy = Object.create(abby);
console.log(billy === abby);

console.log(billy.firstName);
abby.firstName = 'Cindy';
console.log(billy.firstName);

console.log(billy.__proto__);
console.log(billy);

// console.log(billy.firstName);
// billy.firstName = 'Billy';
// console.log(billy.firstName);

