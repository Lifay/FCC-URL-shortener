var express = require("express"),
    router = express.Router(),
    Url = require("../models/url");
    middleware = require("../middleware")

//Root Route
router.get("/", function (req, res) {
    res.render("index");
});

//Redirect to shortUrl
router.get("/:id", function (req, res) {
    if (req.url != '/favicon.ico') {
        Url.findOne({ id: req.params.id }, function (err, foundUrl) {
            if (err) {
                console.log(err);
            } else if (!foundUrl) {
                res.json({ error: "ShortUrl not found."});
            } else {
                res.redirect(foundUrl.url);
            }
        });
    }
});

//Create new shortUrl
router.get("/new/:url(*)", middleware.checkValidUrl, function (req, res) {    
    var newUrl = { url: req.params.url };
    Url.create(newUrl, function (err, url) {
        if (err) {
            console.log(err);
        } else {            
            res.json({
                short_url: "http://localhost:3000/" + url.id,
                url: url.url
            });
        }
    });
});

module.exports = router;