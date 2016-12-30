var {mongoose} = require('../db/mongoose');


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true, 
        minlength: 1
    }
});

// var user = new User({
//     email: 'brandon@example.com'
// });

// user.save().then((results) => {
//     console.log("Saved user:", results);
// }).catch((error) => {
//     console.log('Unable to save user:', error);
// });

module.exports = {User};