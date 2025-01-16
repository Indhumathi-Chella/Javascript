function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function using await
async function greet() {
  console.log("Waiting...");
  await delay(2000);  // 2sec
  console.log("Hello after 2 seconds!");
}


greet();