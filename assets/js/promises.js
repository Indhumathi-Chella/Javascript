// fetch product data with error handling
async function fetchData(url) {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      return response.json();
    } catch (error) {
      console.error(`Error fetching from ${url}:`, error);
    }
  }
  
  // 1.Promise: Fetch data and display
  async function getStatus() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(`Response: ${response.status}`);
  }
  
  getStatus();
  
  // 2.Fetch and displayfirst product name
  async function getFirstProduct() {
    let data = await fetchData("https://jsonplaceholder.typicode.com/todos");
    console.log("First product:", data ? data[0].title : "Not available");
  }
  
  getFirstProduct();
  
  // 3. Promise.all: Fetch from multiple APIs and display responses
  async function getMultiple() {
    let urls = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://jsonplaceholder.typicode.com/todos/2"
    ];
    let responses = await Promise.all(urls.map(url => fetchData(url)));
    responses.forEach((data, index) => console.log(`Product ${index + 1}:`, data ? data.title : "Error"));
  }
  
  getMultiple();
  
  // 4. Promise.any: Fetch from multiple API, resolve as soon as one succeed
  async function getFirstSuccess() {
    let urls = [
      "https://jsonplaceholder.typicode.com/todos/3",
      "https://jsonplaceholder.typicode.com/todos/4"
    ];
    try {
      let data = await Promise.any(urls.map(url => fetchData(url)));
      console.log("First successful product:", data.title);
    } catch (error) {
      console.error("All failed:", error);
    }
  }
  
  getFirstSuccess();
  
  // 5. Async/Await with error handling: Fetch product data and handle errors
  async function getProducts() {
    let data1 = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
    let data2 = await fetchData("https://jsonplaceholder.typicode.com/todos/2");
  
    if (data1 && data2) {
      console.log("Product 1:", data1.title);
      console.log("Product 2:", data2.title);
    } else {
      console.log("Failed to fetch products");
    }
  }
  
  getProducts();
  