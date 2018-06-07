var db = require("../models");
const bcrypt = require("bcrypt");
// let passportlocal = require("passport-local");

module.exports = function(app) {

    

    //creating the user! TRON



    app.post("/api/login", function(req, res){
        db.User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        }).then(function(result) {
            console.log(result);
            res.json(result);
        });
    });

    // Create board
    app.post("/api/createboard", function(req, res){ //To Do: Check Is Logged In for if it works here!
        //Create an if statement to see if the user is an admin
        db.Board.create({
            title: req.body.title,
            description: req.body.description
        }).then((dbBoard) => {
            res.json(dbBoard);
        });
    });

    //Create topic
    app.post("/api/createtopic", function(req, res){
        console.log(req.body);
        //We need to pass through the object containing the below case sensitive fields in JSON format.
        db.Topic.create({
            topicName: req.body.topicName,
            UserId: req.body.UserId,
            BoardId: req.body.BoardId
        }).then((dbTopic) => {
            res.json(dbTopic);
        });
    });

    //Create post
    app.post("/api/createpost", function(req, res){
    //We need to pass through the object containing the below case sensitive fields in JSON format.
        db.Post.create({
            content: req.body.content,
            UserId: req.body.UserId,
            TopicId: req.body.TopicId
        }).then((dbPost) => {
            res.json(dbPost);
        });
    });


    //The Boards Page - Featuring Zach Braff
    app.get("/api/boards", function(req, res) {
        db.Board.findAll({
            attributes: ['id', 'title', 'description'],
            include: [
                {
                    model: db.Topic,
                    include: [
                        {
                            model: db.User,
                            attributes: ['username'],
                        }
                    ],
                    where: {},
                    order: [[ 'createdAt', 'DESC' ]],
                    limit: 1
                }
            ]
        }).then(function (boardResults) {
            let data = boardResults;
            console.log(data[0].dataValues.Topics);
            res.json(data);
        });
    })

    //The Topics Page - Featuring Donald Faison
    app.get("/api/boards/:board", function(req, res) {
        db.Board.findOne({
            where: {
                id: req.params.board
            },
            attributes: ['title', 'description'],
            include: [
                {
                    model: db.Topic,
                    attributes: ['id', 'topicName', 'updatedAt', 'BoardId'],
                    include: [
                        {
                            model: db.User,
                            attributes: ['username']
                        }
                    ],
                    where: {
                        boardId: req.params.board
                    },
                    order: [[ 'createdAt', 'DESC' ]],
                    limit: 50
                }
            ]
        }).then(function(topicResults) {
            let data = topicResults;
            console.log(topicResults);
            res.json(data);
        });
    });

    //The Messages Page - Featuring Sarah Chalke
    app.get("/api/boards/:board/:topic", function(req, res) {
        db.Topic.findOne({
            where: {
                BoardId: req.params.board,
                id: req.params.topic,
            },
            include: [
                {
                    model: db.Post, 
                    where: {
                        TopicId: req.params.topic,
                    },
                    include: [
                        {
                            model: db.User,
                            attributes: ['username']
                        }
                    ],
                }
            ]
        }).then(function(messageResults) {
            let data = messageResults;
            console.log(data);
            res.json(data);
        });
    });
}