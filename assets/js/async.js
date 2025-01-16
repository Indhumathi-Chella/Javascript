function getData(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "John Doe", age: 30 });
        }, 2000);  // 2-sec delay
    });
}

// Using Callback
function getDataWithCallback(userId, callback) {
    getData(userId).then(callback);
}

// Using Promise
function getDataWithPromise(userId) {
    return getData(userId);
}

// Using async/await
async function getDataWithAsyncAwait(userId) {
    try {
        const user = await getData(userId);
        console.log("User data (async/await):", user);
    } catch (error) {
        console.log("Error:", error);
    }
}

getDataWithCallback(1, (user) => console.log("User data (Callback):", user));


getDataWithPromise(2)
    .then(user => console.log("User data (Promise):", user))
    .catch(error => console.log("Error:", error));

getDataWithAsyncAwait(3);
