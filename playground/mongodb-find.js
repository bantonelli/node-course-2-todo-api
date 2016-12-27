const {MongoClient, ObjectID} = require('mongodb');

/*
Finding Documents in the database.  
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    } 
    console.log('Connected to the MongoDB server');

    // Find all todos in the collection
        // .find() returns a cursor
        // .toArray() makes cursor into an array of documents. 
    // db.collection('Todos').find({
    //     _id: new ObjectID('58606f992044ed040e8025b6')
    // }).toArray().then((result) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(result, undefined, 2));
    // }).catch((err) => {
    //     console.log(err);
    // });

    // db.collection('Todos')
    // .find()
    // .count()
    // .then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }).catch((err) => {
    //     console.log(err);
    // });

    db.collection('Users')
    .find({
        name: "Jenn"
    })
    .toArray()
    .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })
    .catch((err) => {
        console.log(err);
    });


    // db.close();
});