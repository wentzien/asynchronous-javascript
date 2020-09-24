// async and await
// erlaubt es asynchronen Code synchron zu schreiben

console.log('start');

const id = 1;
showItems(id);

console.log('end');

async function showItems(id) {
    try {
        const user = await getUser(id);
        const orders = await getOrders(user.shopUsername);
        const items = await getItems(orders[0].orderId);
        console.log(items);
    } catch (err) {
        console.log(err.message);
    }

}

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