// const promise = new Promise((resolve, reject) => {
//     // hier können nun asynchrone Operationen durchgeführt werden
//
//     setTimeout(() => {
//         resolve("Das ist das Ergebnis"); // pending => resolve, fulfilled
//         // reject(new Error('error message')); // pending => rejected
//
//     }, 3000);
// });
//
// promise
//     .then(value => console.log(value))
//     .catch(err => console.log(err.message));


// Rewriting the callback hell:

console.log('start');

const id = 1;
getUser(id)
    .then(user => getOrders(user.shopUsername))
    .then(orders => getItems(orders[0].orderId))
    .then(items => console.log(items))
    .catch(err => console.log(err.message));


console.log('end');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching userdata from database");
            resolve({id: id, name: "John Doe", shopUsername: "john.doe"});
        }, 3000);
    });
}

function getOrders(shopUsername) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching Orders from Online-Shop");
            resolve([{orderId: 1, name: "order1"}, {orderId: 2, name: "order2"}, {
                orderId: 3,
                name: "order3"
            }]);
        }, 3000);
    });
}

function getItems(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching Items from Online-Shop");
            resolve(['gpu', 'cpu', 'case', 'power adapter']);
        }, 3000);
    });
}