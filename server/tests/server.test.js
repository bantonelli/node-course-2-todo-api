const expect = require("expect");
const request = require("supertest");
const { ObjectID } = require("mongodb");

const {app} = require('../server');
const {Todo} = require('../models/todo');

var todos = [{
    _id: new ObjectID(),
    text: "First test todo"
}, {
    _id: new ObjectID(),
    text: "Second test todo"
}];

beforeEach((done) => {
    // Clear all todos from DB before running test suite
    Todo.remove({}).then((results) => {
        // CREATE NEW SEED DATA FOR TEST BLOCKS.
        // insertMany adds array of records to db.
        Todo.insertMany(todos);
    }).then(() => {
        done();
    })
    .catch((error) => {
        done(error);
    });
});

describe('POST /todos', () => {
    it('should save todo to database and return it to client', (done) => {
        var text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({
              text  
            })
            .expect(200)
            .expect((res) => {
                // This expect call is from expect library 
                expect(res.body.text).toBe(text);
            })
            .end((error, response) => {
                // check what got stored in mongodb collection 
                // handle errors that happened up above.
                if (error) {
                    return done(error);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(3);
                    expect(todos[todos.length - 1].text).toBe(text);
                    done();
                }).catch((error) => {
                    done(error);
                });
            });
    });

    it('should not create a todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((error, response) => {
            if (error) {
                return done(error);
            }
            Todo.find({})
            .then((results) => {
                expect(results.length).toBe(2);
                done();
            })
            .catch((error) => {
                done(error);
            })   
        });
    });

});

describe('GET /todos', () => {

    it('should return todos in the database', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);         
    });

});

describe('GET /todos/:id', () => {

    var validID = todos[0]._id.toHexString();
    // var invalidID = validID.substring(0, validID.length - 1) + '1';

    // Test case when there is a matching document 
    it('should return 200 and matching todo', (done) => {
        request(app).get(`/todos/${validID}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });

    // Test case when there is no matching document
    it('should return 404 if todo is not found', (done) => {
        var invalidID = new ObjectID().toHexString();
        request(app).get(`/todos/${invalidID}`)
        .expect(404)
        // .expect((res) => {
        //     expect(res.body.error).toBe("Todo not found");
        // })
        .end(done);
    });

    // Test case when ObjectID is not valid
    it('should return a 404 if ObjectID is not valid', (done) => {
        request(app).get(`/todos/123`)
        .expect(404)
        .end(done);
    });
    
});

describe('DELETE /todos/:id', () => {
    // Assert the object is no longer in persistance store  
    it('should remove a todo and return it in response', (done) => {
        // send off request 
        // query db to make sure it is no longer in collection 

        // delete second todo item 
        var hexID = todos[1]._id.toHexString();

        request(app)
        .delete(`/todos/${hexID}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo._id).toBe(hexID);
        })
        .end((err, response) => {
            if (err) {
                return done(err);
            } else {
                // query database using findById()
                // expect(null).toNotExist();
                Todo.findById(hexID).then((dbResults) => {
                    expect(dbResults).toNotExist();
                    return done();
                }).catch((err) => {
                    return done(err);
                });                
            }
        });
    });

    // // Assert that 404 is sent if todo not found 
    it('should return a 404 if todo not found', (done) => {
        var invalidID = new ObjectID().toHexString();
        request(app)
        .delete(`/todos/${invalidID}`)
        .expect(404)
        .end(done);
    });

    // // Assert that 404 is sent if ObjectID is not valid.
    it('should return 404 if ObjectID is invalid', (done) => {
        var invalidID = "1234";
        request(app)
        .delete(`/todos/${invalidID}`)
        .expect(404)
        .end(done);
    });

});