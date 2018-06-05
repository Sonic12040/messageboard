var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
var PORT = process.env.PORT || 8080;
var app = express();
// var passport = require('passport');
// var flash = require('connect-flash');
// var morgan = require('morgan');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');


// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(morgan('dev'));

// app.set('view engine', 'ejs'); // set up ejs for templating

// app.use(session({ secret: 'message' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash()); // use connect-flash for flash messages stored in session

//Route Imports
require("./routes/api-routes") (app);
require("./routes/html-routes") (app);
// require("./routes/api-routes") (app, passport);
// require("./routes/html-routes") (app, passport);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});