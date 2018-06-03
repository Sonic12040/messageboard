//Dependencies
var path = require("path");

//Routes
module.exports = function(app){

//boards
app.get("/boards", function(req, res){
    res.sendFile(path.join(__dirname, "../public/boards.html"));
});

//boards/:board
app.get("/boards/:board", function(req, res){
    res.sendFile(path.join(__dirname, "../public/topics.html"));
});

//boards/:board/:topic
app.get("/boards/:board/:topic", function(req, res){
    res.sendFile(path.join(__dirname, "../public/posts.html"));
});

//(index)
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//If we get to it
//boards/:board/:topic/:message
//users/:user
//admin
app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
});
//boards/:board/:topicquery

}