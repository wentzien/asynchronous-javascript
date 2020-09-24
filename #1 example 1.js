console.log('start');

// setTimeout: non blocking function
setTimeout(() => {
    console.log("fetching data from database")
}, 3000);

console.log('end');

// asynchronous beduetet nicht gleichzeitig oder multi threaded