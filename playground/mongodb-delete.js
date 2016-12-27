const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }
    console.log('Connected to database');

    // db.collection('Todos').deleteMany({text: "Eat lunch"})
    // .then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     if (error) {console.log(error);}
    // });

    // db.collection('Todos').deleteOne({
    //     text: "Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // db.collection('Users').deleteMany({name: "Brandon"})
    // .then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('586071676e0ac1042f7dfbc5')
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    // db.close();    

});