const mongoose = require('mongoose');

const userSchema = new mangoose.Schema({
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true},
});

module.exports = mongoose.model('User',userSchema);