// Parent Class 
class Shape {
    constructor(name) {
        this.name = name;
    }

    describe() {
        console.log(`This is a shape called ${this.name}.`);
    }
}

// Child Class 
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    // calculate area of the circle
    area() {
        return Math.PI * this.radius * this.radius;
    }

    describe() {
        console.log(`This is a ${this.name} with a radius of ${this.radius} and area of ${this.area().toFixed(2)}`);
    }
}


let myCircle = new Circle(5);
let myCircle2 = new Circle(3);
let myCircle3 = new Circle(2);


myCircle.describe();
myCircle2.describe();
myCircle3.describe();   