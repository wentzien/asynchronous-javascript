console.log('start');

const id = 1;
getUser(id, user => {
    console.log(user);
    getOrders(user.shopUsername, orders => {
        console.log(orders);
        getItems(orders[0].orderId, items => {
            console.log(items);
        });
    });
});

console.log('end');

function getUser(id, callback) {
    setTimeout(() => {
        console.log("fetching userdata from database");
        callback({id: id, name: "John Doe", shopUsername: "john.doe"});
    }, 3000);
}

function getOrders(shopUsername, callback) {
    setTimeout(() => {
        console.log("fetching Orders from Online-Shop");
        callback([{orderId: 1, name: "order1"}, {orderId: 2, name: "order2"}, {
            orderId: 3,
            name: "order3"
        }]);
    }, 3000);

}

function getItems(orderId, callback) {
    setTimeout(() => {
        console.log("fetching Items from Online-Shop");
        callback(['gpu', 'cpu', 'case', 'power adapter']);
    }, 3000);
}

// Synchrone Schreibweise, deutlich einfacher zu lesen

// console.log('start');
//
// const user = getUser(1)
// const orders = getOrders(user.shopUsername);
// const items = getItems(order.orderId);
//
//
// console.log('end');