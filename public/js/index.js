$(document).ready(function() {

//VARIABLES




//FUNCTIONS
//menu toggle checksize function
function checkSize() {
    if ($('.menuCheck').css('display') == "none") {
        $('#js-mb-menu').addClass('mb-menu-overlay');
        $('#js-mb-menu').removeClass('mb-menu');
        $('#js-mb-menu').removeClass('mb-menu-vertical');
    };
};

//function to show the sidebar menu
function menuShow() {
    $('.speechform').addClass('speechform-menu');
    $('.speechform').removeClass('speechform');
    $('.wrapper').addClass('mb-menu-push-toright');
    $('.wrapper').animate({marginleft: '+=300px'}, 500);
    $('#js-mb-menu').animate({width: 'toggle'}, function () {
        $('#js-mb-toggle').hide();
        $('#js-mb-toggle-off').show();
    });
};

//function to hide the sidebar menu
function menuHide() {
    $('.speechform-menu').addClass('speechform');
    $('.speechform').removeClass('speechform-menu');
    $('.wrapper').removeClass('mb-menu-push-toright');
    $('.wrapper').animate(
        {
            marginleft: '-=300px'
        }, 500);
    $('#js-mb-menu').animate({width: 'toggle'}, function() {
        $('#js-mb-toggle-off').hide();
        $('#js-mb-toggle').show();
    });
};

//function to toggle the login modal
function loginToggle() {
    $('.js-login-modal').toggleClass('d-n');
};

//function to toggle the signup modal
function signupToggle() {
    $('.js-signup-modal').toggleClass('d-n');
};

//function to handle the login on the client side
function loginFunction() {
    var formData = {
        username: $('#username-js').val().trim(),
        password: $('#password-js').val().trim()
    };
    $.ajax({
        method: 'POST',
        contentType: 'application/json',
        url: window.location + 'api/login',
        data: JSON.stringify(formData),
        dataType: 'json',
        success: (user) => {
            $('#postUser').html('<p>Welcome <br>' + user.username + '</p>');
        }
    });
    $('#username-js').val('');
    $('#password-js').val('');
};

//function to get the data for index.html
function getIndex() {
    $.ajax({
        method: 'GET',
        url: '/api/boards'
    }).then((response) => {
        $('#boardIndex').empty();
        let lastObj = response.slice(-1);
        let boardId = lastObj[0].id;
        let boardDesc = lastObj[0].description;
        let alignBoxes = $('<div>');
        let boardBox = $('<div>').html('<a href="/boards/' + boardId + '" class="button" target="">' + lastObj[0].title + '</a><div class="speechbox ml-3em mr-3em mb-1em">' + boardDesc + '</div>');
        let boardHTML = alignBoxes.append(boardBox);
        $('#boardIndex').append(boardHTML);
    })
};

//function to get boards on boards.html
function getBoards() {
    $.ajax({
        method: 'GET',
        url: '/api/boards'
    }).then((response) => {
        $('#boardResults').empty();
        response.forEach(board => {
            let boardId = board.id;
            let boardName = $('<div>').addClass('mb-1em button').html('<a href="/boards/' + boardId + '" target="">' + board.title + '<a>');
            let alignBoxes = $('<div>').addClass('d-f jc-center');
            let boardDescDiv = $('<div>').addClass('speechbox ml-3em mr-3em mb-1em').text(board.description);
            let boardHTML = alignBoxes.append(boardDescDiv);
            $('#boardResults').append(boardName, boardHTML);
        });
    })
};

//function to get topics on oneboard.html
function getTopics() {
    $.ajax({
        method: 'GET',
        url: '/api' + window.location.pathname
    }).then((response) => {
        console.log('index.js line 56 ' + response.id);
        let boardName = $('<div>').addClass('button js-topic').text(response.title);
        response.Topics.forEach(topic => {
            let postsExpand = $('<div>').addClass('js-posts-expand expand');
            let alignBoxes = $('<div>').addClass('d-f jc-center');
            let boardDescDiv = $('<div>').addClass('speechbox2 ml-3em mr-3em mb-1em').text(topic.topicId);
            let topicHTML = postsExpand.append(alignBoxes).append(boardDescDiv);
            $('#topicResults').append(boardName, topicHTML);
        });
    })
};

//function to create a topic
function createTopic() {
    $('.js-newtopic').on('click', function(event) {
        event.preventDefault();
        //topic portion
        $.ajax({
            method: 'POST',
            url: '/api/create' + window.location.pathname,
            data: {
                topicName: $('#topicName').val().trim()
            }
        }).then((response) => {
            //post portion
            $.ajax({
                method: 'POST',
                url: '/api/createpost',
                data: {
                    content: $('#postContent').val().trim(),
                    TopicId: response.id
                }
            }).then((responseTwo) => {
                return responseTwo;
            });
        });
    });
};

//function to get posts on onetopic.html
function getPosts() {

};

//function to create a post
function createPost() {

};



//EVENTS
//Global Events
//page load




$('#js-mb-menu').hide();
$('#js-mb-toggle-off').hide();
//menu show
$('#js-mb-toggle').on('click', function(event) {
    event.preventDefault();
    checkSize();
    menuShow();
});
//menu hide
$('#js-mb-toggle-off').on('click', function(event) {
    event.preventDefault();
    menuHide();
});
//display login modal
$('.js-login-button').on('click', function(event) {
    loginToggle();
});
//hide login modal
$('.js-login-off').on('click', function(event) {
    loginToggle();
});
//display signup modal
$('.js-signup-button').on('click', function(event) {
    signupToggle();
});
//hide signup modal
$('.js-signup-off').on('click', function(event) {
    signupToggle();
});
//login form submission
$('#submit').on('click', function(event) {
    event.preventDefault();
    loginFunction();
});


//Index Events
//if ($('#boardIndex')) {
    getIndex();
//};

//Boards Events
//if ($('#boardResults')) {
    getBoards();
//};

//oneboard Events
//if ($('#topicResults')) {
    getTopics();
    createTopic();
//};

//onetopic Events
//if ($('#postResults')) {
    getPosts();
    createPost();
//};


//close of document.ready function
});