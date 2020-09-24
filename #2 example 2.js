console.log('start');

const data = getData();
console.log(data);

console.log('end');

function getData() {
    setTimeout(() => {
        console.log("fetching data from database")
        return {data: [
            'data1', 'data2', 'data3'
            ]};
    }, 3000);
}

// Lösung mit:
// Callbacks
// Promises
// async/await