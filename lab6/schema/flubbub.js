var mongoose= require("mongoose");

let flubbubSchema = new mongoose.Schema({
firstName: String,
lastName: String,
department: String,
startDate: Date,
jobTitle: String,
salary: Number
});
module.exports = mongoose.model('flubbub', flubbubSchema);