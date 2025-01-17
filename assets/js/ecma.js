//  let, var, and const
let message = "Hello, world!"; 
const name = "Alice";
var age = 25; 

// Template Literals
const greeting = `My name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Arrow Functions
const add = (a, b) => a + b;  
console.log(`Sum of 2 and 3: ${add(2, 3)}`);

// Rest Parameters
const greetPeople = (greeting, ...names) => {
  names.forEach(name => {
    console.log(`${greeting}, ${name}!`);
  });
};
greetPeople("Hello", "Indhu", "sindhu", "bindhu");

// Destructuring Assignment
const person = { name: "Arun", age: 24, city: "chennai" };
const { name: personName, age, city } = person;  
console.log(`${personName} is ${age} years old and lives in ${city}.`);

// Modules
import { greet } from './module.js';
greet(); 

// Classes
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  describe() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.describe();


// Iterator
let arr = [10, 20, 30];
let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next().value); 
console.log(arrIterator.next().value); 
console.log(arrIterator.next().value); 

// Generator
function* simpleGenerator() {
  yield "a";
  yield "b";
  yield "c";
}

const gen = simpleGenerator();

console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 


// Typed Arrays
let buffer = new ArrayBuffer(8);
let int8Array = new Int8Array(buffer);

int8Array[0] = 10;
int8Array[1] = -20;
int8Array[2] = 30;
int8Array[3] = 40;
int8Array[4] = -50;
int8Array[5] = 60;
int8Array[6] = -70;
int8Array[7] = 80;
 
console.log(int8Array);
console.log(int8Array[0]);
console.log(int8Array[1]);
console.log(int8Array[2]);
console.log(int8Array[3]);
console.log(int8Array[4]);

 
// Promises
const fetchData = new Promise((resolve, reject) => {
  let success = true; 
  if (success) {
    resolve("Data loaded successfully!");
  } else {
    reject("Error loading data.");
  }
});

fetchData
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Using Promises 
const fetchDataAsync = async () => {
  try {
    const response = await fetchData;  
    console.log(response);  
  } catch (error) {
    console.log(error); 
  }
};

fetchDataAsync();

// Intl
const number = 1234567.89;
const numberFormat = new Intl.NumberFormat('en-US').format(number);
console.log('Formatted Number (en-US):', numberFormat); 


const amount = 1234567.89;
const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(amount);
console.log('Formatted Currency (en-US):', currencyFormat); 


const date = new Date();
const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}).format(date);
console.log('Formatted Date (en-US):', dateFormat);  

const collator = new Intl.Collator('en-US');
console.log(collator.compare('apple', 'banana')); 
console.log(collator.compare('banana', 'apple')); 
console.log(collator.compare('apple', 'apple'));



