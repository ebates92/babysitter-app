// var express = require('express');
// var app = express();
var Message = require('../models/messages');


const setupChat = (server, app) => {

    const io = require('socket.io').listen(server);
    connections = [];
    users = [];


    // app.get('/chat', function(req, res) {
    //     res.sendFile(__dirname + '/index.html');
    // });

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

        // New User
        socket.on('new user', function(data, callback){
            callback(true);
            socket.username = data;
            users.push(socket.username);
            updateUsernames();
        });
        
        // Updates usernames list
        function updateUsernames(){
            io.sockets.emit('get users', users);
        }
        
        //Room
        socket.on('room', function(roomId) {
            
            socket.join(roomId);
            // Send Message
            socket.on('send message', function(data){
                Message.create({
                    content: data ,
                    senderId: socket.username
                }).then(function(message){
                    message.save();
                })
                io.sockets.in(roomId).emit('new message', {msg: data, user: socket.username});
            })
            
            
        })
    })
};

module.exports = setupChat;  