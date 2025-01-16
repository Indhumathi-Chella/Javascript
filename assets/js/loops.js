// 1. For Loop 
console.log("For Loop Example: Sum of numbers from 1 to 10");

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`Sum from 1 to 10 is: ${sum}`);

// 2. While Loop 
console.log("\nWhile Loop Example: Countdown from 5");

let countdown = 5;
while (countdown >= 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// 3. Do...While Loop
let count = 0;

do {
    console.log(count);
    count++;
} while (count < 5);

// 4. For...of Loop : display list of fruits
console.log("\nFor...of Loop Example: Display a list of fruits");

const fruits = ["Apple", "Banana", "Mango"];
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}
// 5. For...in Loop: display properties of object(User profile)
console.log("\nFor...in Loop Example: Display User Profile");

const userProfile = {
    name: "John Doe",
    age: 30,
    city: "New York"
};

for (const key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
}

// 6. Break and Continue
console.log("\nBreak and Continue Example: Control loop flow");

for (let i = 1; i <= 6; i++) {
    if (i === 4) {
        console.log("Breaking at iteration " + i);
        break; // Stop loop 
    }
    if (i === 2) {
        console.log("Skipping iteration " + i);
        continue; // Skip the current iteration 
    }
    console.log(`Iteration: ${i}`);
}
