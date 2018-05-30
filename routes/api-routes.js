var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
    //creating the user! TRON
    app.post("/api/createuser", function(req, res) {
        let username = req.name;
        let tempPass = req.password;
        const saltRounds = 10;

        bcrypt.hash(tempPass, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            if (err) throw err;
            //Code to store hash and username in users database
            db.User.create(username, hash).then(function(result) {
                localStorage.clear();
                localStorage.setItem("username", username);
                localStorage.setItem('password', hash);
                location.reload();
            });
        });
    })

    app.get("/api/getusers", function(req, res){
        let username = localStorage.getItem(username);
        let pass = localStorage.getItem(password);
        db.User.findOne({
            where: {
                username: username,
                password: pass
            }
        }).then(function(result) {
            console.log(result);
            localstorage.setItem("loggedin", true);
        });
    });
}