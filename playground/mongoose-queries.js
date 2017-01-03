const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');
const { ObjectID } = require('mongodb');

var id = "586773e621a0c310838468f9";
if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// // Mongoose can query ids without converting to ObjectID
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// }).catch((error) => {
//     console.log(error);
// });

// // Very similar to find except that it returns the document
//     // Does not return an array 
//     // It returns null if it doesn't find one. 
// Todo.findOne({
//     _id: id
// }).then((dbResults) => {
//     console.log('Todo', dbResults);
// });

// // Find by id is the best method of finding by ID
//     // Easier to use interface. 
// Todo.findById(id).then((dbResults) => {
//     console.log('Todo By ID', dbResults);
// }).catch((error) => {
//     console.log(error);
// });

var userID = "5865b3e4a0de6005ab66e070";

User.findById(userID).then((dbResults) => {
    if (dbResults) {
        console.log('User', dbResults);
    } else {
        console.log('User not found!');
    }
}).catch((err) => {console.log(err);})

