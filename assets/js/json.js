// JSON.parse() converts JSON string into javascript object
function parseJSON() {
    const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
    const obj = JSON.parse(jsonString); // Parse string into object
    document.getElementById('parsed').textContent = JSON.stringify(obj, null, 2); 
}

// JSON.stringify() converts javascript object into JSON string
function stringifyJSON() {
    const obj = { name: "Alice", age: 25, city: "London" };
    const jsonString = JSON.stringify(obj); // Convert object to JSON string
    document.getElementById('stringified').textContent = jsonString; 
}
