var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

//Route Imports
require("./routes/api-routes");
require("./routes/html-routes");

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});