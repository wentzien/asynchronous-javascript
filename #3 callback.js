console.log('start');

getUser(id, function (data) {
    // es kann auch die Arrow function syntax aus ES6 verwendet werden
    console.log(data);
});

console.log('end');

function getUser(id, callback) {
    setTimeout(() => {
        console.log("fetching userdata from database");
        callback({id: id, name: "John Doe"});
    }, 3000);
}