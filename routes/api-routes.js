var db = require("../models");
const bcrypt = require("bcrypt");

module.exports = function(app) {
    //creating the user! TRON
    app.post("/api/createuser", function(req, res) {
    //In jquery pass this information as an object.
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then((dbUsers) => {
            res.json(dbUsers);
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