function greet() {
  console.log("Hello, User!");
}

//setTimeout to greet after 3sec
setTimeout(function () {
  console.log("This message appears after 3 seconds.");
}, 3000);

// Using setInterval to greet every 2sec
let intervalId = setInterval(function () {
  greet();
}, 2000);

// Stop interval after 10sec
setTimeout(function () {
  clearInterval(intervalId);
  console.log("The interval has been cleared.");
}, 10000);
