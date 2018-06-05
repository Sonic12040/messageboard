var path = require("path");

module.exports = function(app, passport) {
    app.get('/signup', function(req, res){
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    app.get('/login', function(req, res){
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.post('/api/createuser', passport.authenticate('local-signup', 
        {
            successRedirect: '/',
            failureRedirect: '/signup'
        }
    ));

    app.get('/api/logout', function(req, res){
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/signin');
     
    }
 
}

