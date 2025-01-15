//  class 'Person'
class Person {
    // Constructor with para - name and age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // display person info
    displayInfo() {
        console.log(`${this.name} is ${this.age} years old.`);
    }


    get nameInfo() {
        return `Name: ${this.name}`;
    }


    set nameInfo(newName) {
        this.name = newName;
    }

    static greet() {
        console.log("Hello from the Person class!");
    }

    describe() {
        console.log(`${this.name} is a person who is ${this.age} years old.`);
    }
}

// subclass Employee that inherits from Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Call parent class constructor
        this.jobTitle = jobTitle;
    }


    displayJobInfo() {
        console.log(`${this.name} works as a ${this.jobTitle}.`);
    }


    describe() {
        super.describe();
        console.log(`${this.name} is an employee with the title: ${this.jobTitle}`);
    }
}


let person1 = new Person("Alice", 22);
person1.displayInfo();
console.log(person1.nameInfo);


person1.nameInfo = "Indhu";
console.log(person1.nameInfo);


Person.greet();


let employee1 = new Employee("mathi", 23, "Impact trainee");
employee1.displayInfo();
employee1.displayJobInfo();

employee1.describe();