// Synchronous (long time running   )
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

function generatePrimes(quota) {
    let primes = [];
    let maxPrime = 1000000;

    while (primes.length < quota) {
        let candidate = Math.floor(Math.random() * maxPrime);
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }
    return primes;
}

// Event listener 
document.querySelector("#generate").addEventListener("click", () => {
    let quota = 1000;
    console.log("Generating primes synchronously...");
    let primes = generatePrimes(quota);
    console.log(`Generated ${quota} primes:`, primes);
});


document.querySelector("#xhr").addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("loadend", () => {
        console.log(`XHR Request finished with status: ${xhr.status}`);
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();
    console.log("Started XHR request...");
});

// Reload page
document.querySelector("#reload").addEventListener("click", () => {
    location.reload();
});

function doStep(init, increment, delay, callback) {
    setTimeout(() => callback(init + increment), delay);
}

function doOperation() {
    let result = 0;
    doStep(result, 1, 500, (result1) => {
        doStep(result1, 2, 500, (result2) => {
            doStep(result2, 7, 500, (result3) => {
                console.log(`Callback result: ${result3}`);
            });
        });
    });
}

doOperation();

// Promise 
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Data fetched successfully!") : reject("Failed to fetch data.");
        }, 2000);
    });
}

// Using Promise to fetch data
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
