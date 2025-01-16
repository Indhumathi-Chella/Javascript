// Object Literal Syntax - Creating an object
let person1 = {
    name: "indhu",
    age: 23,
    speak: function () {
        console.log("Hello, " + this.name);
    }
};

console.log(person1.name);
person1.speak();


// Using the new Object()
let person2 = new Object();
person2.name = "mathi";
person2.age = 23;
person2.welcome = function () {
    console.log("Hello, " + this.name);
};

console.log(person2.name);
person2.welcome();


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log("Hello, I am " + this.name);
    };
}

let person3 = new Person("ziva", 12);
let person4 = new Person("riya", 21);

console.log(person3.name);
person4.introduce();


// Using Object.create() to create an object with a prototype
let personPrototype = {
    showInfo: function () {
        console.log("Hello, my name is " + this.name);
    }
};

let person5 = Object.create(personPrototype);
person5.name = "zyan";
person5.showInfo();


// Using class to create an object
class PersonClass {
    letructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hi, I am " + this.name);
    }
}

let person6 = new PersonClass("malik", 24);
let person7 = new PersonClass("sara", 36);

console.log(person6.name);
person7.introduce();


// Using Object.assign() to merge objects
let person8 = { name: "arun", age: 24 };
let person9 = { gender: "Male", occupation: "Engineer" };

let mergedPerson = Object.assign({}, person8, person9);

console.log(mergedPerson);


// Using call() to create an object
function PersonWithCall(name, age) {
    this.name = name;
    this.age = age;
    this.describe = function () {
        console.log("Hello, I am " + this.name);
    };
}

let person10 = {};
PersonWithCall.call(person10, "Sita", 28);
person10.describe();  // Calling 'describe' function


// Factory Function (no new keyword)
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        present: function () {
            console.log("I am " + this.name + " and I am " + this.age + " years old.");
        }
    };
}

let person11 = createPerson("vikcy", 34);
let person12 = createPerson("Geeta", 30);

console.log(person11.name);
person12.present();


// Using `[]` for object property names (Bracket Notation)

let person13 = {
    name: "Manoj",
    age: 35,
    ["city"]: "Mumbai"
};

console.log(person13.name);
console.log(person13.city);  // Accessing dynamic property


// Accessing object properties using `[]` (Bracket Notation)
let person14 = {
    name: "raj",
    "favorite food": "fired rice"
};

// Accessing properties using bracket notation
console.log(person14["name"]);
console.log(person14["favorite food"]);



// Destructuring the array
let numbers = [10, 20, 30];
let [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);  
