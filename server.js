var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.JAWSDB_URL || 8080;
var app = express();
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();


// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({ secret: 'Daniels Dirty Dogs',resave: true, saveUninitialized:true})); // session secret
require('./config/passport.js')(passport, db.User);
app.use(passport.initialize());
app.use(passport.session());

//Route Imports
require("./routes/api-routes") (app, passport);
require("./routes/html-routes") (app, passport);
var authRoute = require("./routes/auth-routes.js") (app,passport);


db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});