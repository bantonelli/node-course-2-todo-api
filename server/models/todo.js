var {mongoose} = require('../db/mongoose');
/* 
MODEL: Todo model 
*/
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true, 
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
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

module.exports = {Todo};