var express = require("express"),
    path = require("path");
    
var app = express(),
    filePath = path.join(__dirname, "one.txt");

app.use(function(req, res, next) {
    res.sendFile(filePath, function(err) {
        if (err) next(new Error("Error sending file!"))
    });
});


app.use(function(err, req, res, next) {
    console.error(err);
    next(err);
})

app.use(function(err, req, res, next) {
        res.status(500);
        res.send("Internal server error");
})

app.listen(process.env.PORT, function() {
    console.log("App started on port process.env.PORT");
})
