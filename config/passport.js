var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
 
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
     
        },
        function(req, username, password, done) {
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
                if (user)
                {
                    return done(null, false, {
                        message: 'That username is already taken. Please try a different name. Like Thrillhouse.'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            'username': username,
                            'password': userPassword,
                        };
                        console.log(User);
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
     
    ));

    passport.serializeUser(function(User, done) {
        done(null, User.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(User) {
            if (User) {
                done(null, User.get());
            } else {
                done(User.errors, null);
            }
        });
    });

};