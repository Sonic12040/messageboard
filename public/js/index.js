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
 function indexPage() { 

    $.ajax({
        method: "GET",
        url: "/api/boards"
    }).then(function(response){


        $("#boardIndex").empty();
        let lastObj = response.slice(-1);
        let boardId = lastObj[0].id;
        let boardDesc = lastObj[0].description;

        console.log("Last Object: ", lastObj[0].title);

        let alignBoxes = $('<div class="d-f jc-center">');
        let boardBox = $('<div class="box_lg box_md box_sm ml-3em mr-3em mb-1em">').html('<a href="/boards/' + boardId + '" target="">' + lastObj[0].title + '</a><div class="speechbox ml-3em mr-3em mb-1em">' + boardDesc + '</div>');

        let boardHTML = alignBoxes.append(boardBox);
                                    
        $("#boardIndex").append(boardHTML);

    });


}

  /*  Boards Ajax call */   
  
  function boardsPost() { 

        $.ajax({
            method: "GET",
            url: "/api/boards"
        }).then(function(response){

            $("#boardResults").empty();
          
            for (let i = 0; i < response.length; i++) {
                let board = response[i];
                console.log('Board: ', board);
                let boardId = response[i].id;

                let boardName = $('<div class="">').html('<a href ="/boards/' + boardId + '" target="">' + board.title + '</a>');
                let alignBoxes = $('<div class="d-f jc-center">');
                let boardDescDiv = $('<div class="speechbox ml-3em mr-3em mb-1em">').text(board.description);

                let boardHTML = alignBoxes.append(boardDescDiv);
                                 
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

    function createTopic() {

        $(".js-newtopic").on('click', function(event){
            event.preventDefault(); 
            $.ajax({
                method: "POST",
                url: "/api/createtopic",
                data: {
                    topicName: $('#topicName').val().trim(),
                    UserId: 1,
                    BoardId: 1
                }
            }).then(function(response) {

                console.log("Response: " + response[0]);
                return response;

            })

            $.ajax({
                method: "POST",
                url: "/api/createpost",
                data: {
                    content: $('#postContent').val().trim(),
                    TopicId: response.TopicId,
                    UserId: 1
                }
            }).then(function(responseTwo) {
                console.log("ResponseTwo!!!!!!!!!!!!!!!!!!!!: " + responseTwo);
            })

        });


    }

    


    //display data on boards page
    boardsPost();
    topicsPost();
    indexPage();
    createTopic();


    
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
    // $(document).on('click', '.js-topic', function(event){
    //     $(".js-posts-expand").toggleClass("expand");
    // })

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