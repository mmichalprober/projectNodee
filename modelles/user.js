const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    city: { type: String },
    mail: { type: String },
    phone: { type: String }
})
module.exports = mongoose.model('User', UserSchema)