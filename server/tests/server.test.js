const expect = require("expect");
const request = require("supertest");

const {app} = require('../server');
const {Todo} = require('../models/todo');

beforeEach((done) => {
    // Clear all todos from DB before running test suite
    Todo.remove({}).then((results) => {
        done();
    }).catch((error) => {
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
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
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
                expect(results.length).toBe(0);
                done();
            })
            .catch((error) => {
                done(error);
            })   
        });
    });

});
