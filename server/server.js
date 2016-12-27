var mongoose = require('mongoose');

/*
- Mongoose by default uses callbacks but the library 
  supports promises
    - You just have to specify which promise lib you are using. 
*/
mongoose.Promise = global.Promise;

/*
- Mongoose maintains the connection to the database over time 

- As the code calls db operations, mongoose waits for the connection 
  before it actually makes a query.
    - We don't have to manage the order of our db calls 
    - Mongoose will manage this for us.  
*/
mongoose.connect('mongodb://localhost:27017/TodoApp');

/* 
MODEL: Todo model 
- Just like Django models 
- specify properties and their types 
    - You can specify many options to a model property such 
      as required, type, etc. 
    - See docs for more options. 
*/
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

/* 
Create an instance of Todo model 
- Creating an instance does not save to db 
*/
// var newTodo = new Todo({
//     text: "Cook dinner"
// });

// /* 
// Save instance of model to database.
// .save() returns a promise (if you specify a promise lib)
// */
// newTodo.save().then((resultDocument) => {
//     console.log("Saved todo", resultDocument);
// }).catch((error) => {
//     console.log("Unable to save todo");
// });

var myNewTodo = new Todo({
    text: "Make a new todo",
    completed: false,
    completedAt: 122716
});

myNewTodo.save().then((resultDocument) => {
    console.log(resultDocument);
}).catch((error) => {
    console.log(error);
});