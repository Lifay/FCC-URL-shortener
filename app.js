var express = require("express"),
        app = express(),
     mongoose = require("mongoose")
autoIncrement = require("mongoose-sequence")

app.set("view engine", "ejs");
var indexRoutes = require("./routes/index");
mongoose.connect("mongodb://localhost/urlshortener");

app.use(indexRoutes);

app.listen(3000, function () {
    console.log("server started");
});