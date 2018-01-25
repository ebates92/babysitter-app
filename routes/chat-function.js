// var express = require('express');
// var app = express();
var Message = require('../models/messages');


const setupChat = (server, app) => {

    // var server = require('http').createServer(app);
    var io = require('socket.io').listen(server);
    users = [];
    connections = [];

    // server.listen(process.env.PORT || 3000);
    // console.log('server running')


    app.get('/chat', function(req, res) {
        res.sendFile(__dirname + '/index.html');
    });

    io.sockets.on('connection', function(socket){
        connections.push(socket);
        console.log('Connected: %s sockets connected', connections.length);

        // Disconnect
        socket.on('disconnect', function(data){
            users.splice(users.indexOf(socket.username), 1);
            updateUsernames();
            connections.splice(connections.indexOf(socket), 1);
            console.log('Disconnected: %s sockets connected', connections.length);
        });

        // Send Message
        socket.on('send message', function(data){
            Message.create({
                content: data ,
                senderId: socket.username
            }).then(function(message){
                message.save();
            })
            io.sockets.emit('new message', {msg: data, user: socket.username});
        })

        // New User
        socket.on('new user', function(data, callback){
            callback(true);
            socket.username = data;
            users.push(socket.username);
            updateUsernames();
        });

        function updateUsernames(){
            io.sockets.emit('get users', users)
        }
    })
};

module.exports = setupChat;  