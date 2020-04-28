/*
    Iteration is the process of writing code that can be executed
    in repition given some expression.

    1. while-loop
    2. do-while-loop
    3. for-loop
    4. Enhanced for-loop
*/

let x = 7;

// we are executing logic WHILE the condition is true
while(x < 10) {
    console.log(x++);
}

let y = -10;

// do-while loop will always run the code block at least once
do {
    console.log(y -= 2);
} while (y > 0);

console.log();

// For loops are a bit more complicated and combine common expressions that
// we might be tempted to put before a while loop
// for(/* declaration */ ; /* predicate */ ; /* Mutation */) {
for(let x = 0; x < 10; x++) {
    console.log(x);
}

const people = ['Abby', 'Billy', 'Cindy'];
const abby = {
    firstName: 'Abby',
    lastName: 'Adams',
    birthDate: '2000-01-01'
};

// in loops - Iterating over keys/index values
// For each iteration of this loop, a property of the object abby will be assigned
// to a variable named 'property'
console.log('in output');
for(const property in abby) {
    // ES6 JS feature - Template Literal
    // Useful for string interpolation in JS
    console.log(property);
    // console.log(`${property}: ${abby[property]}`)
}

console.log('of output');
// of loops - Iterating over values
for(const person of people) {
    console.log(person);
}