// Lib imports 
var express = require("express");
var bodyParser = require("body-parser");

// Local imports 
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Constants
const PORT = 3000;

var app = express();
// Middleware config (pass functions to app.use())
app.use(bodyParser.json());

// Resource creation endpoint: POST /todos
app.post('/todos', (req, res) => {
    // Get content from body using body parser
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(400).send(error);
    });
});

// Access resource endpoint: GET /todos 

app.listen(3000, () => {
    console.log(`Started on port ${PORT}`);
});

module.exports = {app};