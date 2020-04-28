const person = {
    firstName: 'Abby',
    lastName: 'Adams'
};

console.log(`${person['firstName']} ${person.lastName}`);

const food = 'Ice cream';

// Create a property on person with the the key favoriteFood and the value of food
person.favoriteFood = food;

console.log(person.favoriteFood);

// two variables referencing the same object
const otherPerson = person;
const newPerson = { ...person };

otherPerson.firstName = 'Billy';
console.log(person.firstName); // Billy

// Spread Operator - ...
console.log(newPerson.firstName); // Abby

console.log(otherPerson === person);
console.log(newPerson === person);

const billy = {
    ...person,
    // firstName: 'Billy',
    // lastName: 'Adams',
    // favoriteFood: 'Ice cream'
    firstName: 'Billy',
    lastName: 'Brown',
};

console.log(billy);

const a = {
    a: 'apple'
};
const b = {
    b: 'banana'
};
const c = {
    ...a,
    ...b
}

console.log(c);


// Spread operator also works with arrays

const arr = [1, 2, 3];
const otherArr = [4, 5, 6];
const combinedArray = [...arr, ...otherArr];
console.log(combinedArray);