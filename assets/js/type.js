
// Implicit Type Conversion
console.log(5 + '5');
console.log(10 * '2');
console.log(false + 1);
console.log('5' - 3);
console.log(null + 1);       // (null is converted to 0)
console.log(undefined + 1);

// String to Number
let str1 = "123.45";
console.log("Before conversion: " + typeof (str1));
let num1 = Number(str1);
console.log(num1);
console.log("After conversion: " + typeof (num1));

// Number to String
let num2 = 456;
console.log("Before conversion: " + typeof (num2));
let str2 = String(num2);
console.log(str2);
console.log("After conversion: " + typeof (str2));