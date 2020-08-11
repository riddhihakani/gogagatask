var mongoose = require("mongoose");



var UserSchema = new mongoose.Schema({
    name: String,
    city: String,
    state : String
   
});



module.exports = mongoose.model('User',UserSchema);