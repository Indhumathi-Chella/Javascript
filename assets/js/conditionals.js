// 1. if...else with user input
let number = 5;
if (number > 0) {
    console.log("Positive number.");
} else if (number1 < 0) {
    console.log("Negative number.");
} else {
    console.log("Zero.");
}
// 2. if without else
let num = 4;
if (num % 2 === 0) {
    console.log("Even number.");
}

// 3. if...else if (Signal check)
let signal = "green";
if (signal === "red") {
    console.log("Stop, the signal is red.");
} else if (signal === "yellow") {
    console.log("Caution, the signal is yellow.");
} else if (signal === "green") {
    console.log("Go, the signal is green.");
} else {
    console.log("Unknown signal color.");
}

// 4. switch statement 
let input = false; // Can change 

switch (input) {
    case 1:
        console.log("The value is number 1.");
        break;
    case true:
        console.log("The value is boolean true.");
        break;
    case false:
        console.log("The value is boolean false.");
        break;
    case "hi":
        console.log("welcome Home!");
        break;
    default:
        console.log("No match found.");
}


// 5. Ternary operator (Check Age)
let age = 20;
let resultText = age >= 18 ? "Adult" : "Minor";
console.log(resultText);

// 6. Logical AND (&&)  (Voting Eligibility)
let age2 = 20;
let isCitizen = true;
if (age2 >= 18 && isCitizen) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

// 7. Logical OR (||) (Check Relax)
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax!");
} else {
    console.log("Time to work.");
}

// 8. Logical NOT (!)  (Check member)
let isMember = false;


if (!isMember) {
    console.log("You are not a member, no discount for you.");
} else {
    console.log("You are a member, you get a discount!");
}

// 9. Nested if...else (Weather Check)
let weather = "sunny";
let temperature = 32;
if (weather === "sunny") {
    if (temperature > 30) {
        console.log("Its sunny and hot!");
    } else {
        console.log("Its sunny but cool.");
    }
} else {
    console.log("Its not sunny.");
}