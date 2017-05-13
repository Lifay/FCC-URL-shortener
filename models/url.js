var mongoose = require("mongoose"),
    autoIncrement = require("mongoose-sequence");

var urlSchema = new mongoose.Schema({
    url: String
});
//Create the field id and increment it with every create.
urlSchema.plugin(autoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Url", urlSchema);