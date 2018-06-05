$( document ).ready(function() {

    
    $(".js-login-button").on('click', function(event) {
        // event.preventDefault();
        $(".js-login-modal").toggleClass("d-n");
        console.log("this worked");   
    });

    // For X button on login modal
    $(".js-login-off").on('click', function(event) {
        $(".js-login-modal").toggleClass("d-n"); 
    })


    $(".js-signup-button").on('click', function(event) {
        // event.preventDefault();
        $(".js-signup-modal").toggleClass("d-n");
        console.log("this worked, too!!");
    });

    // For X button on signup modal
    $(".js-signup-off").on('click', function(event) {
        // event.preventDefault();
        $(".js-signup-modal").toggleClass("d-n");
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

    //for topics to expand
    $(".js-topic").on('click', function(event){
        $(".js-posts-expand").toggleClass("expand");
    })

    //Hamburger Menu

    // hide menu
    $( "#js-mb-menu").hide(); 
    $( "#js-mb-toggle-off").hide(); 


    //show menu
    $( "#js-mb-toggle" ).on('click', function() {
         $(".wrapper").addClass("mb-menu-push-toright");
        $(".wrapper").animate({
            marginleft: '+=300px'
        }, 500);
        
        $( "#js-mb-menu" ).animate( {width: 'toggle'},  function()
                {   
                        $( "#js-mb-toggle" ).hide();
                        $( "#js-mb-toggle-off").show(); 
                        
            
                 });
        });

    //  //hide menu on click   
     $( "#js-mb-toggle-off" ).on('click', function() {

        $(".wrapper" ).removeClass( "mb-menu-push-toright" );
        $(".wrapper").animate({
            marginleft: '-=300px'
        }, 500);
        
	
        $( "#js-mb-menu" ).animate( {width: 'toggle'}, function()
                {
                        $( "#js-mb-toggle-off" ).hide();
                        $( "#js-mb-toggle" ).show();
                       
            
                 });
        });
        




});