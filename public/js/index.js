$( document ).ready(function() {

 /*  Submit and Ajax call for login page begin */   
        

    	// SUBMIT FORM
        $("#submit").submit(function(event) {
            // Prevent the form from submitting via the browser.
            event.preventDefault();
            ajaxPost();
        });
        
        
        function ajaxPost(){
            
            // PREPARE FORM DATA
            var formData = {
                username : $("#username-js").val().trim(),
                password :  $("#password-js").val().trim()
            }
            
            // DO POST
            $.ajax({
                method : "POST",
                contentType : "application/json",
                url : window.location + "api/login",
                data : JSON.stringify(formData),
                dataType : 'json',
                success : function(user) {
                    $("#postUser").html("<p>" + 
                        "Welcome <br>" + user.username + "</p>"); 
                },
                // error : function(e) {
                //     alert("Error!")
                //     console.log("ERROR: ", e);
                // }
            });
            
            // Reset FormData after Posting
            resetData();
     
        }
        
        function resetData(){
            $("#username-js").val("");
            $("#password-js").val("");
        }



 /*  Submit and Ajax call for login page ends */   


  /*  Boards Ajax call */   
  
  function boardsPost() { 

        $.ajax({
            method: "GET",
            url: "/api/boards"
        }).then(function(response){

            $("#boardResults").empty();
          
            for (let i = 0; i < response.length; i++) {
                let board = response[i];

                let boardName = $('<div class="button js-topic">').text(board.title);
                let postsExpand = $('<div class="js-posts-expand expand">');
                let alignBoxes = $('<div class="d-f jc-center">');
                let boardDescDiv = $('<div class="speechbox2 ml-3em mr-3em mb-1em">').text(board.description);

                let boardHTML = postsExpand.append(alignBoxes)
                                           .append(boardDescDiv);
                
                 
             $("#boardResults").append(boardName, boardHTML);


            }
           
        });


    }

//for oneboard ISNT WORKING YET
    function topicsPost() { 

        $.ajax({
            method: "GET",
            url: "/api/boards/:boards/:topics"
        }).then(function(response){
          
            for (let i = 0; i < response.length; i++) {
                let board = response[i];

                let boardName = $('<div class="button js-topic">').text(board.title);
                let postsExpand = $('<div class="js-posts-expand expand">');
                let alignBoxes = $('<div class="d-f jc-center">');
                let boardDescDiv = $('<div class="speechbox2 ml-3em mr-3em mb-1em">').text(board.topic.topicId);

                let topicHTML = postsExpand.append(alignBoxes)
                                           .append(boardDescDiv);
                
                 $("#topicResults").empty();
                 $("#topicResults").append(boardName, topicHTML);
                
                 console.log("Is this working?");

            }
           
        });


    }

//for NEW POST 


    //display data on boards page
    boardsPost();
    topicsPost();


    
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
    $( "#js-mb-toggle" ).on('click', function(event) {
         // Prevent menu showing via the browser.
        event.preventDefault();

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

     //hide menu on click   
     $( "#js-mb-toggle-off" ).on('click', function(event) {
           // Prevent menu showing via the browser.
        event.preventDefault();


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