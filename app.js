var express = require("express"),
        app = express(),
     mongoose = require("mongoose");
require("dotenv").config({
    silent: true
});

app.set("view engine", "ejs");
mongoose.connect(process.env.DATABASE);

var indexRoutes = require("./routes/index");
app.use(indexRoutes);

app.listen(process.env.PORT || 3000, function () {
    console.log("server started");
});