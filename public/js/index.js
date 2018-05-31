const bcrypt = require("bcrypt");

$( document ).ready(function() {
    
    $(".js-login-button").on('click', function(event) {
        event.preventDefault();
        $(".js-login-modal").toggleClass("d-n");
        console.log("this worked");   
    });


    $(".js-signup-button").on('click', function(event) {
        event.preventDefault();
        $(".js-signup-modal").toggleClass("d-n");
        console.log("this worked, too!!");
    });

    $(".js-newuser").on('click', function(event){
        let username = req.name;
        let tempPass = req.password;
        const saltRounds = 10;

        bcrypt.hash(tempPass, saltRounds, function(err, hash) {

            localStorage.clear();
            localStorage.setItem("username", username);
            localStorage.setItem('password', hash);
            localStorage.setItem('loggedin', true);
            location.reload();
        });
    });





});