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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};