function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};


Person.prototype.haveBirthday = function () {
    this.age += 1;
    return `${this.name} has turned ${this.age} years old!`;
};

Person.species = 'Homo sapiens';


let person1 = new Person('Indhu', 22);


let animal = {
    species: 'Unknown',
    speak() {
        return `${this.species} makes a sound.`;
    }
};

// Object.create() - create  new object (inherits from another object)
let dog = Object.create(animal);
dog.species = 'Dog';

// Object.getPrototypeOf - check prototype of object
console.log(Object.getPrototypeOf(person1) === Person.prototype);
console.log(Object.getPrototypeOf(dog) === animal);

// Object.setPrototypeOf - change objects prototype
let cat = { species: 'Cat' };
Object.setPrototypeOf(cat, animal);
console.log(cat.speak());

// static property 
console.log(Person.species);

// Call methods from prototype
console.log(person1.greet());
console.log(person1.haveBirthday());

let person2 = new Person('ziva', 10);
console.log(person2.greet());
console.log(Object.getPrototypeOf(person2) === Person.prototype); 