// JSON.parse() convert JSON string into js object
function parseJSON() {
    let jsonString = '{"name": "mathi", "age": 22, "city": "Tenkasi"}';
    let obj = JSON.parse(jsonString); 
    document.getElementById('parsed').textContent = JSON.stringify(obj, null, 2); 
    console.log("Parsed Object:", obj);
}

// JSON.stringify() convert JS object into JSON string
function stringifyJSON() {
    let obj = { name: "Indhu", age: 23, city: "chennai" };
    let jsonString = JSON.stringify(obj); 
    document.getElementById('stringified').textContent = jsonString; 
}
