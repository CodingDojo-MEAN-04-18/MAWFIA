const mongoose = require('../config/mongoose.js');

const UserSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength: 2},
    quote: {type:String, required: true, minlength: 1}
}, {timestamps: true })

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
module.exports = mongoose.model('User');
