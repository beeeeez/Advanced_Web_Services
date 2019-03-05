var mongoose= require("mongoose");

let butterSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    dept: String,
    date: Date,
    title: String,
    salary: Number
});
module.exports = mongoose.model('Butter', butterSchema);