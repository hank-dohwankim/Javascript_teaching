// var, let, const

var name = 'John Doe';
console.log(name);

var name = 'Jane Doe';
console.log(name);

// Init var
var greeting;
console.log(greeting); // undefined

greeting = 'hello';
console.log(greeting);

// Multi word vars
var firstName = 'Camel case';
var first_name = 'Unserscore';
var FirstName = 'Pascal case';

// let : similar with var

// const
const lastName = 'John';
console.log(name);

// can't reassign
// lastName = 'Sara'; // error

const person = {
  name: 'John',
  age: 39,
};

person.name = 'Sara';

// console.log(person);

const numbers = [1, 2, 3, 4, 5];
// const numbers = [1, 2, 3, 4, 5, 6]; // error
numbers.push(6);

console.log(numbers);
