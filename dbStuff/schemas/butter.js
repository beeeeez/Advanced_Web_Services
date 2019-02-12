var mongoose= require("mongoose");

let butterSchema = new mongoose.Schema({
    buttCount: Number,
    isItLarry: Boolean,
    toeCount: Number,
    name: String
});
module.exports = mongoose.model('Butter', butterSchema);