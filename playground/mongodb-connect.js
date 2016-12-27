// var MongoClient = require('mongodb').MongoClient;
// Use destructuring on require call instead.
const {MongoClient, ObjectID} = require('mongodb');

// THIS IS HOW YOU CREATE YOUR OWN OBJECT ID 
// var obj = new ObjectID();
// console.log(obj);

// Use mongo client to connect to the database.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    // If error connecting
    if (err) {
        console.log('Unable to connect to MongoDB server');        
    }
    // If success connecting  
    else {
        console.log('Connected to MongoDB server');

        // Create new collection 'Todos'
            // Then insert a new document in the collection
        // db.collection('Todos').insertOne({
        //     text: 'Something to do',
        //     completed: false
        // }, (err, result) => {
        //     // Callback is for success or failure case
        //     if (err) {
        //         return console.log('Unable to insert todo', err);
        //     }
        //     console.log(JSON.stringify(result.ops, undefined, 2));
        // });

        // db.collection('Users').insertOne({
        //     name: "Brandon",
        //     age: 27,
        //     location: "NJ"
        // }, (err, result) => {
        //     if (err) {
        //         console.log('Unable to add document', err);
        //     } else {
        //         // console.log(JSON.stringify(result.ops, undefined, 2));
        //         // Print Timestamp
        //         console.log(result.ops[0]._id.getTimestamp());
        //     }
        // });

        // Close the connection
        db.close();
    }        
});

