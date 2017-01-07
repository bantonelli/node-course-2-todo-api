// Lib imports 
var express = require("express");
var bodyParser = require("body-parser");
var { ObjectID } = require("mongodb");

// Local imports 
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Constants
const port = process.env.PORT || 3000;

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

// Access list resource endpoint: GET /todos
app.get('/todos', (req, res) => {
    // Get todos from database 
    // return all todos in response 
    Todo.find({}).then((dbResults) => {
        res.status(200).send({
            todos: dbResults,
            requestSuccess: true
        });
    }).catch((dbError) => {
        res.status(404).send(dbError);
    });
});

// Access single resource by id: GET /todos/:id 
app.get('/todos/:id', (req, res) => {    
    // get id and validate
    var id = req.params.id;
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    } 
    // query database
    Todo.findById(id).then((dbResults) => {
        if (dbResults) {
            res.status(200).send({todo: dbResults});
        } else {
            res.status(404).send()            
            // res.status(404).send({error: "Todo not found"});
        }
    }).catch((error) => {
        res.status(400).send();
    });
});

// Delete single resource route DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
    // get the id 
    // validate the id 
        // if not valid send 404
        // If valid delete using findByIdAndRemove(); 
            // if not deleted send 404 
            // if deleted send 200 and document that was deleted. 
    var id = req.params.id; 
    if (!ObjectID.isValid(id)) {
        console.log('ObjectID err');
        return res.status(404).send();
    } 
    Todo.findByIdAndRemove(id).then((dbResults) => {
        // console.log(dbResults);
        if (dbResults) {
            // console.log(dbResults);
            res.status(200).send({
                todo: dbResults
            });
        } else {
            // console.log('No Dbresults');
            res.status(404).send();
        }
    }).catch((err) => {
        // console.log('Server err');
        res.status(400).send();
    });
});

// Start server 
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};