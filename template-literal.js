
// Template literals allow us to embed other values
const descriptor = 'fun';
// const str = 'JavaScript is ' + descriptor;
const str = `JavaScript is ${descriptor}`;
console.log(str);


// Template literals can be used for multiline strings
const multiLine = `hello \
everyone`;

console.log(multiLine);

console.log(`hello`.toUpperCase());