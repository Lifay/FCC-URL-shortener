
middlewareObj = {};

middlewareObj.checkValidUrl = function (req, res, next) {
    var url = req.params.url;
    let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
    if (!regex.test(url)) {
        return res.json({ error: "Invalid url" });
    } else {
        next();
    }
};

module.exports = middlewareObj;