const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove() --> removes docs that are matched 
// Todo.remove({}); // this will remove everything
// Does not return documents that are removed.
// Todo.remove({}).then((dbResults) => {
//     console.log(dbResults);
// }).catch((err) => {
//     console.log(err);
// });


// Todo.findOneAndRemove --> like findOneAndUpdate 
// It will match the first document
    // You can match any property with this though 
    // NOT ONLY IDs
// It will also return the object removed.


// Todo.findByIdAndRemove 
// Just like findById --> pass the ID and it will remove 
// It will return the object removed. 

var id = "58708ebf24836555ceeb9a84";
Todo.findByIdAndRemove(id).then((dbResults) => {
    console.log(dbResults);
}).catch((err) => {
    console.log(err);
});