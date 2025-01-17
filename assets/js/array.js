let numbers = [1, 2, 6, 4, 5, 3];
console.log("Initial Array:", numbers);

// push() - Adds element at end
numbers.push(6);
console.log("\nAfter push(6):", numbers);

// pop() - Remove last element
let removedItem = numbers.pop();
console.log("\nAfter pop():", numbers);
console.log("Removed item (pop):", removedItem);

// shift() - Remove first element
let removedShiftItem = numbers.shift();
console.log("\nAfter shift():", numbers);
console.log("Removed item (shift):", removedShiftItem);

// unshift() - Adds one or more elements to the begin
numbers.unshift(0);
console.log("\nAfter unshift(0):", numbers);

// forEach() - Executes a provided func once for each element
console.log("\nUsing forEach():");
numbers.forEach(function (num) {
    console.log(num);
});

// map() - new array with results of calling a func on every element
let doubledNumbers = numbers.map(num => num * 2);
console.log("\nAfter map() (doubled numbers):", doubledNumbers);

// filter() - new array with all elements that pass the test
let numbersGreaterThanThree = numbers.filter(num => num > 3);
console.log("\nAfter filter() (numbers greater than 3):", numbersGreaterThanThree);

// reduce() - Applies a func to acc a value from the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("\nAfter reduce() (sum of numbers):", sum);

// join() - Combines all array elements into a string
let numbersString = numbers.join(", ");
console.log("\nAfter join():", numbersString);

// sort() - Sorts the array elements
numbers.sort();
console.log("\nAfter sort():", numbers);

// reverse() - Reverses the order of the array elements
numbers.reverse();
console.log("\nAfter reverse():", numbers);

// concat() - Merges two or more arrays
let moreNumbers = [7, 8, 9];
let allNumbers = numbers.concat(moreNumbers);
console.log("\nAfter concat():", allNumbers);

// includes() - Checks if an array contains a certain element
let hasFive = numbers.includes(5);
console.log("\nAfter includes() (Has 5?):", hasFive);

// indexOf() - Finds the index of an element
let indexOfFour = numbers.indexOf(4);
console.log("\nAfter indexOf() (Index of 4):", indexOfFour);

// some() - Checks if at least one element satisfies the condition
let hasNegative = numbers.some(num => num < 0);
console.log("\nAfter some() (Has negative number?):", hasNegative);

// every() - Checks if all elements satisfy the condition
let allPositive = numbers.every(num => num > 0);
console.log("\nAfter every() (Are all numbers positive?):", allPositive);

// Custom Array Method: Adding a method to Array's prototype to calculate sum
Array.prototype.getSum = function () {
    return this.reduce((acc, num) => acc + num, 0);
};


let customSum = numbers.getSum();
console.log("\nCustom Method getSum():", customSum);

