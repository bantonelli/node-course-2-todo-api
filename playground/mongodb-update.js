const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {return console.log(err);}
    console.log('Connected to the database server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5861c824690b1a67e41d8dab")
    // }, {
    //     $set: {completed: true}
    // }, { 
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("58620537690b1a67e41d973d")
    }, {
        $set: { name: "Brandon"}, 
        $inc: { age: 1 }
    }, {
        returnOriginal: true
    }).then((result) => {
        console.log(result);
    }).catch((err) => {console.log(err);});
    // db.close();
});