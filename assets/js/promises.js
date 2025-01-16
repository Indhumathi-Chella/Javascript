// Function to fetch data from an API with error handling
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// 1. Fetch status code and display it
async function getStatus() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Status code:", response.status);
}

getStatus();

// 2. Fetch and display the first product's title
async function getFirstProduct() {
  let data = await fetchData("https://jsonplaceholder.typicode.com/todos");
  console.log("First product:", data ? data[0].title : "Not available");
}

getFirstProduct();

// 3. Fetch multiple products and display them
async function getMultipleProducts() {
  let urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2"
  ];
  let products = await Promise.all(urls.map(fetchData));
  products.forEach((product, index) => {
    console.log(`Product ${index + 1}:`, product ? product.title : "Error");
  });
}

getMultipleProducts();

// 4. Fetch from multiple APIs and display the first successful product
async function getFirstSuccessfulProduct() {
  let urls = [
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"
  ];
  try {
    let product = await Promise.any(urls.map(fetchData));
    console.log("First successful product:", product.title);
  } catch (error) {
    console.error("All failed:", error);
  }
}

getFirstSuccessfulProduct();

// 5. Fetch two products and display their titles
async function getTwoProducts() {
  let product1 = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
  let product2 = await fetchData("https://jsonplaceholder.typicode.com/todos/2");

  if (product1 && product2) {
    console.log("Product 1:", product1.title);
    console.log("Product 2:", product2.title);
  } else {
    console.log("Failed to fetch products");
  }
}

getTwoProducts();
